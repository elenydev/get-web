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

export const dismiss = async (id: string) => {
  await db
    .collection("Employers")
    .doc(id)
    .delete()
    .then(() => {
      console.log("success!, show alert now");
    })
    .catch((err) => {
      console.log("errorcode", err.code);
    });
};

export const hire = async (values) => {
  await db
    .collection("Employers")
    .add(values)
    .then(() => {
      console.log("success!, show alert now");
    })
    .catch((err) => {
      console.log("errorcode", err.code);
    });
};
