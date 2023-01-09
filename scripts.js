HideTipEach();

document.getElementById("tipsForm").addEventListener("submit",CalculateTip);

function CalculateTip(event) {
    event.preventDefault(); // Determina que a página não será recarregada.
    // Variável pode ser declarada com var ou let
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;

    if(bill == '' | serviceQual ==0) 
    {
        alert('Atenção! Valor da conta e qualidade do serviço devem estar preenchidos.');
        return;
    }

    if(numOfPeople=='' | numOfPeople<1) 
    {
        alert("Atenção! A quantidade de pessoas deve ser 1 ou mais.");
        return;
    } 
    else if(numOfPeople==1) 
    {
        HideEach();
    } 
    else 
    {
        ShowEach();
    }

    // toFixed determina a quantidade de casas decimais.
    let gorjetaPorPessoa = ((bill * serviceQual) / numOfPeople).toFixed(2);

    document.getElementById('tip').innerHTML = gorjetaPorPessoa;
    ShowTip();
}

function HideTipEach()
{
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";

}

function HideEach()
{
    document.getElementById("each").style.display = "none";
}

function ShowEach() 
{
    document.getElementById('each').style.display = "block";
}

function ShowTip()
{
    document.getElementById('totalTip').style.display = "block";
}