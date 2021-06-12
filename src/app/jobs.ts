export class Jobs {
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url: string;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string;

  constructor(a?) {
    if (a) {
      this.id = a.id;
      this.type = a.type;
      this.url = a.url;
      this.created_at = a.created_at;
      this.company = a.company;
      this.company_url = a.company_url;
      this.location = a.location;
      this.title = a.title;
      this.description = a.description;
      this.how_to_apply = a. how_to_apply;
      this.company_logo = a.company_logo;
    }
  }
}
