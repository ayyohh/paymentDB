const randoArray = [1,2,3,4,5,6]

const calcRemainingBalance = (arr) => {
  let totalBalance = 1100;
  for(let i = 0; i < arr.length; i++){
    totalBalance = totalBalance - arr[i];
  }
  return totalBalance;
}

console.log(calcRemainingBalance(randoArray));




<div>
<% const calcRemainingBalance = (arr) => { %>
  <% let totalBalance = 1100; %>
  <% for(let i = 0; i < arr.length; i++){ %>
  <%    totalBalance = totalBalance - arr[i].amount; %>
  <% } %>
  <% return totalBalance; %>
<% } %>

  <h4>Remaining Balance: $<%= calcRemainingBalance(balances); %></h4>
</div>
