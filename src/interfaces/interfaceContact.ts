type ContactType = {
    id: string
    name:string
    number:string
  }
  
  type ContactsType ={
    contacts: ContactType[]
  }
  
export  interface IStateContact{
    contacts : ContactsType
  }