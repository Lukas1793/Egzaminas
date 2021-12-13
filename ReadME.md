Registracijos forma application


--Serverio startavimui atsidaryti naują terminalą ir nueiti i aplanką backend (terminale parašyti: cd backend)
--Reikia susidiegti node modules, komanda terminale: npm install

--Susikurti .enc failą su ir pateikti šia informaciją:

PORT = 4000

DATABASE_ACCESS = "mongodb+srv://userTWO:Lukas123@cluster0.q7gyi.mongodb.net/register?retryWrites=true&w=majority"

--Startuoti serveriui terminale parašyti: npm start
--Sekmingai startavus serveriui terminale matysite tekstą:
server is running on port: 4000
Database connected...

--FrontEnd startavimui atsidaryti naują terminalą ir nueiti i aplanką frontend (terminale parašyti: cd frontend)
--Reikia susidiegti node modules, komanda terminale: npm install
--Startuoti FrontEnd terminale parašyti: npm start

---Aplikacijoje suvedus vartotojo duomenis ir paspaudus mygtuką "Registruoti", vartotojo duomenys atvaizduojami "Vartotojų saraše"
-----Duomenys siunčiami į backend duomenų bazę ir atvaizduojami frontend "Vartotojų saraše"

---Atnaujinti galima tik vartotojo vardą pavardę suvedus į laukelį naujus duomenis ir paspaudus mygtuką atnaujinti.
---Įgalinti funkcionalumo atnaujinti el.paštą ar amžių nepavyko.
---Ištrinti vartotoją iš "Vartotojų sarašo" spausti mygtuką "Ištrinti vartotoją"

