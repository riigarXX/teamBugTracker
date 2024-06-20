import { Request, Response } from "express";
import { saveBugReport } from "../../services/bugService";

export const saveBug = async (req: Request, res: Response) => {
  try {
    const { form } = req.body;
    const result = await saveBugReport(form);
    res.json({
      status: true,
      message: "Bug report guardado correctamente",
      date: result.date,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error al guardar el bug report" });
  }
};
