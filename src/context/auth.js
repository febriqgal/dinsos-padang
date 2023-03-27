/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import LoadingC from "@/components/loading";
import { Authentication } from "@/db/firebase";
import { InitialUserState, useUser } from "./user";

const AuthStateChangeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();
  const { SetUser } = user;
  const InitiateAuthStateChange = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        console.log("User is authenticated");
        console.log(user);
        SetUser({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        console.log("User is not authenticated");
        SetUser(InitialUserState);
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    InitiateAuthStateChange();
  }, []);

  if (isLoading) {
    return <LoadingC />;
  }

  return children;
};

export default AuthStateChangeProvider;
