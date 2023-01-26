import { Router }  from "express";
const router = Router();
function healthCheck(){
    router.get("/", (req, res) => {
        const health = {
          uptime: process.uptime(),
          message: "OK",
          timestamp: Date.now(),
        };
        try {
          res.send(health);
        } catch (error) {
          res.send(error);
        }
      });
      return router
}
export {healthCheck}