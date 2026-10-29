export const ratingLabels: Record<number,string> = {5:'Excellent',4:'Very Satisfactory',3:'Satisfactory',2:'Fair',1:'Needs Improvement'}
export const ratingDescriptions: Record<number,string> = {
 5:'Excellent – Always demonstrates the behavior',
 4:'Very Satisfactory – Often demonstrates the behavior',
 3:'Satisfactory – Sometimes demonstrates the behavior',
 2:'Fair – Seldom demonstrates the behavior',
 1:'Needs Improvement – Rarely demonstrates the behavior',
}
export function score(answers: Record<string,number>) { const values=Object.values(answers); if(values.length!==28)return null; const average=values.reduce((a,b)=>a+b,0)/28; const interpretation=average>=4.51?'Excellent':average>=3.51?'Very Satisfactory':average>=2.51?'Satisfactory':average>=1.51?'Fair':'Needs Improvement'; return {average,display:average.toFixed(2),interpretation} }
