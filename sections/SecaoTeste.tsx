import MyIsland from "../islands/Counter.tsx";

export interface Props {
    name?:string;
    /**
    * @title Publish date.
    * @format datetime
    */
    datetime: string;
}

export default function Section({name = 'teste'}: Props){
    return (
      <div>
        <div>{name}</div>
        <div><MyIsland /></div>
      </div>
    );
}