import { NextApiRequest, NextApiResponse } from 'next';

type ErrorResponse = {
  message: string;
}

type SuccessResponse = {
  id: string;
  name: string;
  role: 'admin' | 'manager';
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | SuccessResponse>
) => {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Bad request' });
  }
  if (req.body.email === 'manager' && req.body.password === 'alex') {
    res.status(200).send({ id: '1', name: 'alex manager', role: 'manager' });
  }
  if (req.body.email === 'admin' && req.body.password === 'alex') {
    res.status(200).send({ id: '2', name: 'alex admin', role: 'admin' });
  }
  res.status(401).send({ message: "Bad credentials" });
};

export default handler;
