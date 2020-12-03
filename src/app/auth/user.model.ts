export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExprirationDate: Date
  ) { }


  get token() {
    if (!this._token || new Date() > this._tokenExprirationDate) {
      return null;
    }
    return this._token;
  }

}
