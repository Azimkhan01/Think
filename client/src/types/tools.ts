export interface fields{
    name:string
    value:string,
}

export interface initialize{
    title:string,
    field:fields,


}

export interface mainFormType{
    title:string 
    work?:initialize[]

}