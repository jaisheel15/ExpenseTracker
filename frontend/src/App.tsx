import { useEffect, useState } from 'react'
import './App.css'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
const [totalspent, setTotalspent] = useState(0)
useEffect(()=>{
  async function totalspent(){
    const res = await fetch("/api/expenses/total-spent")
    const  data = await res.json();
    setTotalspent(data.total)
  }
  totalspent();

},[])
  return (
    <>
   
   <Card>
    <CardHeader>
      <CardTitle>Total Spent</CardTitle>
      <CardDescription>The Total amount you've spent</CardDescription>
    </CardHeader>
    <CardContent>{totalspent}</CardContent>
   </Card>

      
    </>
  )
}

export default App
