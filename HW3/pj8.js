function daysInYear(n) {
    if(n % 4) return 365;
    if(n % 100) return 366;
    if(n % 400) return 365;
    else return 366;
    
}