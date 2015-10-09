function book(title, author, price, amount){
    this.title = title;
    this.author = author;
    this.rea = rea;
    this.price = price;
    this.amount = amount;
}

function rea() {
    with(this)
    this.price *= this.amount;
}

var amount = document.getElementById("myamount").value;


myBook = new book("Harry potter", "Author", 500, amount);
myBook.rea();

document.write(myBook.price);
document.write("dsfksdkmlbsdmklf");
