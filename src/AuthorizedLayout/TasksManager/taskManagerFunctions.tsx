import { db } from "../../services/firebase";
export const sendTask = async (values, e) => {
  await db
    .collection("Tasks")
    .add(values)
    .then(() => {
      console.log("success!, show alert now");
    })
    .catch((err) => {
      console.log("errorcode", err.code);
    });
  e.target.reset();
};
export const deleteTask = async (id) => {
  await db
    .collection("Tasks")
    .doc(id)
    .delete()
    .then(() => {
      console.log("success!, show alert now");
    })
    .catch((err) => {
      console.log("errorcode", err.code);
    });
};
