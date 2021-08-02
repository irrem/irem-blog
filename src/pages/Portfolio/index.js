

function newItemClick(){
    window.location.href="./newItem";
}

function Portfolio() {
  return (
   <div>portfolio small items, if you want to read more text you can click read more buttons.
       <a onClick={()=>newItemClick()}> add new item</a>
       <a href="./itemDetail"> read more</a>
   </div>
  );
}
export default Portfolio;
