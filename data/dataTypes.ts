export interface userLocationDataType  {
    asn : string;
    asnName : string;
    asnOrg : string;
    businessName : string;
    businessWebsite : string;
    city : string;
    continent : string;
    country : string;
    countryCode : string;
    ipName : string;
    ipType : string;
    isp : string;
    lat : number;
    lon : number;
    org : string;
    query : string;
    region : string;
    status : string;
    timezone : string;
    utcOffset : string;
 }
 

 export interface CourseData {
    id: string;
    featuredImage: string;
    title: string;
    description: string;
    slug: string;
    category: string[];
    additionalDetails?: string;
    svgIconUrls: string[];
    regularPrice: {
      dollar: number;
      naira: number;
    };
    salePrice: {
      dollar: number;
      naira: number;
    };
    noOfProjects: number;
    courseOutline: string[];
    active: boolean;
    level: string;
    prerequisites? : string[];
    featured?: boolean;
  }

  export interface selectedCourseDataType {
    course: string
  }