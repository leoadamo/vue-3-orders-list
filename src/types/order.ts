export interface Contact {
  name: string;
  email: string;
  phone: string;
  fax: string;
}

export interface Header {
  number: number;
  serial: number;
  buyer: string;
  price: number;
  currency: string;
  createdAt: string;
  status: string;
  contact: Contact;
}

export interface SupplierDocument {
  type: string;
  value: string;
}

export interface Supplier {
  code: string;
  name: string;
  readAt: string;
  lastReplyAt: string;
  document: SupplierDocument;
  address: string;
  contact: Contact;
}

export interface Address {
  label: string;
  name: string;
  code: string | null;
  address: string;
  contact: Contact;
}

export interface Order {
  header: Header;
  supplier: Supplier;
  addresses: Address[];
}
