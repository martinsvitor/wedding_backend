import express, {Request, Response, NextFunction} from 'express'

const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', function(req:Request, res: Response, next: NextFunction) {
  res.send('respond with a resource');
});

usersRouter.post('/', (req,res) => {
  console.log('received request', req.body);
})

usersRouter.post('/confirm', (req:Request, res: Response, next: NextFunction) => {
  const {firstName, lastName, willAttend} = req.body;
  if (willAttend)
  res.json(req.body);
})

export default usersRouter;
