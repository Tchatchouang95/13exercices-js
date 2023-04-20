/*Question 1*/

function check_password(){
    let pwd = "0123456789";
    let usr_input = prompt("Entrer votre mot de passe: ");

    if (pwd == usr_input)
    {
        alert("Bienvenue");
    }
    else
    {
        alert("erreur de mot de passe");
    }
}


//Question 2

//2-(a)

function even_numbers(){
    let numb = prompt("Entrer un nombre paire: ")
    const seq = [];
    for (let i = 0; i <= numb; i++)
    {
        if (i % 2 == 0)
        {
            seq.push(i);
        }
    }
    alert(seq);
}


//2-(b)

function odd_numbers(){
    var numb = prompt("Entrer un nombre impaire: ")
    const seq = [];
    for (let i = 0; i <= numb; i++)
    {
        if (i % 2 != 0)
        {
           seq.push(i);
        }
    }
    alert(seq);
}


//Question 3

function swap(){

    let a = prompt("Entrez la valeur A: ");
    let b = prompt("Entrez la valeur B: ");

    let temp = a;
        a = b;
        b = temp;
    
    alert("A:"+ a + "\nB:" + b)
}


//Question 4

function leap_year(){
    let year = prompt("Entrez une année: ");

    if (year % 4 == 0)
    {
        if(year % 100 != 0)
        {
            alert("Oui" + year + "est une année bissextile");
        }
    }
    else
    {
        alert("<b>NON</b> c'est n'est pas une année bissextile");
    }
}

//Question 5
function eqn_quadratic(){

    let a = prompt("Entrez la valeur a:" );
    let b = prompt("Entrez la valeur b:" );
    let c = prompt("Entrez la valeur c:" );

    let discriminant = (b * b) - (4 * a * c);

    if(discriminant > 0)
    {
        let var_1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let var_2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        alert("Les racines sont: X1 = "+ var_1 + " et X2 = "+ var_2);
    }

    else if (discriminant == 0)
    {
        let variable, var_1,  var_2;

        variable = var_1 = var_2 = -b / (2 * a);

        alert("Les racines sont: X1 = X2 = "+ variable);
    }

    else
    {
        let real_part = ((-b) / (2 * a));
        let img_part = ((Math.sqrt(discriminant)) / (2 * a));

        alert("X1: "+ real_part + "+ "+ img_part + "i and X2: "+ real_part + "- "+ img_part);
    }

}


//Question 6

function val_check_1(){
    let input_value = prompt("Entrez un Nombre compris entre 1 et 3: ");

    if (input_value > 1 && input_value < 3)
    {
        alert("Nombre Correct!");
    }
    else
    {
       input_value = prompt("Incorrect!\nEntrez un Nombre compris entre 1 et 3: ");

        if (input_value > 1 && input_value < 3)
        {
            alert("Nombre Correct!");
        }
    }
}


//Question 7

function val_check_2(){
    let input_value = prompt("Entrez un Nombre compris entre 10 et 20: ");

    if (input_value > 10 && input_value < 20)
    {
        alert("Nombre Correct!");
    }
    else if (input_value > 20)
    {
        alert("Plus petit !");
    }
    else
    {
        alert("Plus grand !");
    }
}


//Question 8

function numb_seq(){
    let value = parseInt(prompt("Entrez un nombre: "))
    const seq = [];

    for (let i = 1; i <= 10; i++)
    {
        value += 1;
        seq.push(value);
        
    }
    alert(seq);
}


//Question 9

function tab_mul(){
    let value = parseInt(prompt("Entrez un nombre: "));
    
    for (let i = 1; i <= 10; i++)
    {
        let answer = value * i;
        alert(value +" x "+ i + " = " + answer+"\n");
    }
}


//Question 10

function sum(){
    let value = parseInt(prompt("Entrez un nombre: "));
    let sum_total = 0;

    for (let i = 1; i <= value; i++)
    {
        sum_total += i;
    }
    alert("Sum: "+sum_total);
}


//Question 11

function factoriel(){
    let value = parseInt(prompt("Entrez un nombre: "));
    let mul_total = 1;
    const fact = [];

    for (let i = 1; i <= value; i++)
    {
        mul_total *= i;
        fact.push(i);
    }
    alert(value+"! = "+fact.join(" x ")+" = "+mul_total);
}

//Question 12

function largest_num(){
    let max = 0;
    const arr = [];
    let count = 1;

    for (let i = 1; i <= 20; i++)
    {
        let numb = prompt("Entrez le numbre numéro "+i+":");
        arr.push(numb);
        
        if (numb > max)
        {
            max = numb;
        }
    }

    //Position du nombre max

    for(i = 1; i <= 20; i++)
    {
        count++;
        if (arr[i] == max)
        {
            break;
        }
    }
    alert("Le plus grand de ces nombres ["+arr+"] est: "+max+"\n"+"C'était le nombre numero "+count);
}


//Question 13

function largest_num_suite(){
    let max = 0;
    const arr = [];
    let count = 1;
    let count_1 = 1;

    while(true)
    {
        let numb = prompt("Entrez le numbre numéro "+count_1+":");
        
        if(numb == 0)
        {
            break;
        }
        else
        {
            arr.push(numb);
            if (numb > max)
            {
                max = numb;
            }
        } 
        count_1++;
    }

    //Position du nombre max

    for(i = 1; i <= count_1; i++)
    {
        count++;
        if (arr[i] == max)
        {
            break;
        }
    }
    alert("Le plus grand de ces nombres ["+arr+"] est: "+max+"\n"+"C'était le nombre numéro: "+count);
}