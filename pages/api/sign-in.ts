import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(404).send({ error: 'Bad request' });
  }
  if (req.body.email === 'manager' && req.body.password === 'alex') {
    res.status(200).send({ id: '1', name: 'Manager', role: 'manager' });
  }
  if (req.body.email === 'admin' && req.body.password === 'alex') {
    res.status(200).send({ id: '2', name: 'Admin', role: 'admin' });
  }
  res.status(401).send({ error: "Bad credentials" });
}

