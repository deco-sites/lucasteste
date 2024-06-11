export interface Props {
    name?:string
}

export default function Section({name = 'teste'}){
    return (
        <div>{name}</div>
    );
}