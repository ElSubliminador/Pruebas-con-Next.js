import { dbConnect, dbClose } from "@/utils/db";

dbConnect();

export default function handler(req, res) {
  dbClose();
  res.status(200).json({ name: 'John Doe' })
}
