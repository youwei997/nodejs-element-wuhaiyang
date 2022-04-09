
//判断数据是否为false，暂时用于判断token
export const isEmpty = (value) => {
    return (
        value === null ||
        value === undefined ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    )
}