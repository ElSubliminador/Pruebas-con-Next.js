import { dbConnection } from "@/utils/db";

dbConnection();

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
