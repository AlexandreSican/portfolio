
type LinesProps = {
  heigth: string
}

export const LinesAbout = (props:LinesProps) =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1020"
      height={props.heigth}
      fill="none"
      viewBox="0 0 1020 208"
    >
      <path fill="#E7E7E7" d="M0 164h1020v44H0v-44z"></path>
      <path stroke="#E7E7E7" d="M263 0.5L779 0.5"></path>
      <path stroke="#E7E7E7" d="M518.5 1L518.5 164"></path>
    </svg>
  )
}