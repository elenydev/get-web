import { db } from "../../services/firebase";
export const addOffer = async (values) => {
  await db
    .collection("JobOffers")
    .add(values)
    .then(() => {
      console.log("success!, show alert now");
    })
    .catch((err) => {
      console.log("errorcode", err.code);
    });
};
export const deleteOffer = async (id: string) => {
  await db
    .collection("JobOffers")
    .doc(id)
    .delete()
    .then(() => {
      console.log("success!, show alert now");
    })
    .catch((err) => {
      console.log("errorcode", err.code);
    });
};
