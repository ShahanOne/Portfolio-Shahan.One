import connectMongo from '../../../utils/connectMongo';
import Test from '../../../models/testModel';

// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
//  */

import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
// export default async function addTest(req, res) {
//   try {
//     console.log('CONNECTING TO MONGO');
//     await connectMongo();
//     console.log('CONNECTED TO MONGO');

//     console.log('CREATING DOCUMENT');
//     const test = await Test.create(req.body);
//     console.log('CREATED DOCUMENT');

//     res.json({ test });
//   } catch (error) {
//     console.log(error);
//     res.json({ error });
//   }
// }
