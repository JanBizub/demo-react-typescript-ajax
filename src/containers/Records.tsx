import * as React from "react";

export interface Record {
    Id: number | string
    Text: string
}

interface RecordProps {
    Record: Record
}

const Record = (props: RecordProps) => {
    return <p>Item: {props.Record.Text} with id: {props.Record.Id}</p>
}

interface RecordsContainterProps {
    RecordItems: Record[]
}

export const Records = (props: RecordsContainterProps) => {
    if (props.RecordItems === null) return <p>No items!</p>
    else return (
    <div>
        {props.RecordItems.map((record) => <Record key={record.Id} Record={record} />)}
    </div>)
}
