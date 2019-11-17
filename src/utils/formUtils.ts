type ErrorsParams = { [key: string]: string[] };
type ErrorsResult = { [key: string]: string };

export function transformErrors(errors: ErrorsParams) {
    return Object.entries(errors).reduce((acc: ErrorsResult, [key, value]) => {
        acc[key] = `${key} ${value[0]}`;
        return acc;
    }, {});
}