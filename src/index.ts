if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
import express from 'express';
import http from 'http';
import connection from './db/config';
import {  urlencoded } from 'body-parser';
import cors from 'cors';
import { Server } from 'socket.io';
import authenticationRoutes from './routes/authentication';
import formRoutes from './routes/form';
import criteriaRoutes from './routes/criteria';
import categoryaRoutes from './routes/category';
import questionaRoutes from './routes/question';
import answerRoutes from './routes/answer';

import { Criteria } from './models/criteria';
import { createCriteria } from './scripts/criteria';
import { Category } from './models/category';
import { createCategory } from './scripts/category';
import { Question } from './models/question';
import { createQuestions } from './scripts/question';


const app = express();
declare global {
    namespace Express {
      interface Request {
        userId: string
      }
    }
  }

app.use(cors({origin: '*'}));

app.use(express.json());

app.use(urlencoded({extended: true}));
app.use('/', authenticationRoutes);
app.use('/form', formRoutes)
app.use('/criteria', criteriaRoutes)
app.use('/category', categoryaRoutes)
app.use('/question', questionaRoutes)
app.use('/answer', answerRoutes)

const server = http.createServer(app);
export const io = new Server(server);

export const userSocketMap: { [userId: number]: string[] } = {};



io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('userJoined', (userId: number) => {
        // Associate the userId with the socketId
        console.log('userjoined', userId)
        const previousArray = userSocketMap[userId];
        if(previousArray && previousArray?.length > 0) {
            console.log('entra no prev ')
            userSocketMap[userId] = [...previousArray, socket.id];
        }else {
            console.log('entra no else ')

            userSocketMap[userId] = [socket.id];
        }
        console.log(userSocketMap);
        console.log(`User ${userId} joined with socketId ${socket.id}`);
      });

      socket.on('userLeft', (userId: number) => {
        console.log('userleft', userId)
        const currentUserSocketMap = userSocketMap[userId];
        if(currentUserSocketMap && currentUserSocketMap?.length <= 1) {
            delete userSocketMap[userId]
        }else if(currentUserSocketMap) {
            const filteredSocketMap = currentUserSocketMap?.filter((cur) => cur !== socket.id);
            userSocketMap[userId] = filteredSocketMap;
        }
      })
    socket.on('disconnect', () => {
         Object.keys(userSocketMap).map((value) => {
            userSocketMap[parseInt(value)] = userSocketMap[parseInt(value)].filter((item) => item !== socket.id)
         })
        console.log('user disconnected');
      });
})

console.log("check connection data", process.env);

connection
    .sync()
    .then(() => {
        console.log("Database successfully connected");
        Criteria.findAll().then((result) => {
          if(result.length === 0) {
            createCriteria().then(() => {
              Category.findAll().then((resultCategory) => {
                if(resultCategory.length === 0) {
                  createCategory().then(() => {
                    Question.findAll().then(result => {
                      if(result.length === 0) {
                        createQuestions().then(() => {
                          console.log("Criteria, categories and questions created")
                        });
                      }
                    })
                  })
                }
              })
            });

          }
        })
    })
    .catch((err) => {
        console.log("Error db", err);
        console.error(err);
      });

      server.listen(process.env.PORT, () => {
        
    console.log(`Server started on port ${process.env.PORT}`);
});
