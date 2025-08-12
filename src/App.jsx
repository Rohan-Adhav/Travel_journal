import Header from "/components/Header"
import Entry from "/components/Entry"
import data from "/data"
export default function App(){
  const dataitems = data.map((item)=>{
    return(
      <Entry
      key={item.id}
      item={item}
   


      />
    )
  })
    return (
      <>
        <Header/>
        <main>
         {dataitems}
        </main>
      </>
    )
}