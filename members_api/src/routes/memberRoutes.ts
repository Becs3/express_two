import express from "express"
import { getMembers, getMemberById, createMember, attendMember, deleteMember } from "../controller/log_controller"

const router = express.Router()
router.get("/", getMembers)
router.get("/:id", getMemberById)
router.post("/", createMember)
router.patch("/:id", attendMember)
router.delete("/:id", deleteMember)

export default router;