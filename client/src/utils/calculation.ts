export class calculation{

   add(...args:number[]):number
{
    const data:{total:number,sum:number} = {
        sum:0,
        total:args.length
    }
    for(let i:number = 0;i<args.length;i++)
    {
        data.sum += args[i]
    }

    return data.sum
}

subtract(...args:number[]):number
{
    const data:{total:number,sub:number} = {
        sub:0,
        total:args.length
    }
    for(let i:number = 0;i<args.length;i++)
    {
        data.sub -= args[i]
    }

    return data.sub
}

}