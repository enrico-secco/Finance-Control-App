import React, {createContext, useState} from 'react';

//Responsável pra englobar todos os componentes a partir de quando logar, todas as rotas vão ter acesso ao nome, userUID.
//Utilizado pra aplicações que usam os dados (nome do user, userUID) em várias telas.

export const AuthContext = createContext({});

export default function AuthProvider() {
 const [user, setUser] = useState({
     nome: "Enrico"
 });

 return (
   <AuthContext.Provider value={{ user }}>
       
   </AuthContext.Provider>
  );
}