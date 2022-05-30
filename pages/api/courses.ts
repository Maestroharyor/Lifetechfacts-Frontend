// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {courses} from "../../data/courses";
import {CourseData} from "../../data/dataTypes";

type Data = {
  courses: CourseData[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ courses })
}
