export class Todo {
  constructor(
    public id: string,
    public label: string,
    public quantity: number, // add
    public isCompleted: boolean = false
  ) {}
}
