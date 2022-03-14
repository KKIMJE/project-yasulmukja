--음주내역
insert into alcohol_management(drink_no,mno,amount,type,level) 
values(1,77,'5bottles','와인','low');
insert into alcohol_management(drink_no,mno,amount,type,level) 
values(2,77,'30bottles','소주','high');
insert into alcohol_management(drink_no,mno,amount,type,level) 
values(3,77,'24bottles', '맥주','moderate');
insert into alcohol_management(drink_no,mno,amount,type,level) 
values(4,77,'7bottles', '사케', 'high');
insert into alcohol_management(drink_no,mno,amount,type,level) 
values(5,77,'48bottles', '막걸리', 'high');

--술 
insert into alcohol_detail(alcohol_detail_no,alcohol_type_no,name,degree,brand,origin,volume,characteristic,img)
values(1,2,'소주',16.9,'HiteJinro','Korea',360,'한국 대표 술','sjdfhaslkfhd,dsajfklh');
insert into alcohol_detail(alcohol_detail_no,alcohol_type_no,name,degree,brand,origin,volume,characteristic,img)
values(2,3,'맥주',4.6,'HiteJinro','Korea',500,'테라브랜드','safdfaf/sfdasa/sfada');
insert into alcohol_detail(alcohol_detail_no,alcohol_type_no,name,degree,brand,origin,volume,characteristic,img)
values(3,4,'막걸리',6.0,'느린마을','Korea',360,'ㅎㅎㅎㅎㅎ','sjdfhaslkfhd,dsajfklh');
insert into alcohol_detail(alcohol_detail_no,alcohol_type_no,name,degree,brand,origin,volume,characteristic,img)
values(4,5,'와인',13.5,'etcsd','Korea',360,'프랑스에서 숙성함','sjdfhaslkfhd/afsd');
insert into alcohol_detail(alcohol_detail_no,alcohol_type_no,name,degree,brand,origin,volume,characteristic,img)
values(6,7,'소주',16.5,'lotte','Korea',360,'ㅇㅇㅇㅇㅇㅇ','sjdfhaslkfhd/afsd');

--신고하기 
insert into report(repo_no,mno,target_no,type,contents,status) 
values(1,77,1,'회','신고해요 여기',true);
insert into report(repo_no,mno,target_no,type,contents,status) 
values(2,77,3,'게','신고합니당',true);
insert into report(repo_no,mno,target_no,type,contents,status) 
values(3,77,2,'주','여기좀읽어주세요',false);
insert into report(repo_no,mno,target_no,type,contents,status) 
values(4,77,1,'회','확인부탁드립니다',false);
insert into report(repo_no,mno,target_no,type,contents,status) 
values(5,77,1,'회','ㅈㅂㅈㅂㅈㅂㅈㅂ',true);

--태그 
insert into tag(tag_no,name)
values(2,'#단골손님많아요');
insert into tag(tag_no,name)
values(3,'#소주맥주막걸리 모두 다가능');
insert into tag(tag_no,name)
values(4,'#지하철역이랑 5분거리');
insert into tag(tag_no,name)
values(5,'#술과 안주 모두 맛있음 보장');

--모임찜은 관계테이블인거 같아서 뺌 

--메뉴 사진 (fk라서 안먹힘 ) 
insert into menu_img(menu_img_no,store_menu_no,img)
values(100,151,'sdfsas');
insert into menu_img(menu_img_no,store_menu_no,img)
values(101,200,'sdfsas');
insert into menu_img(menu_img_no,store_menu_no,img)
values(200,101,'sdfsas');
insert into menu_img(menu_img_no,store_menu_no,img)
values(50,40,'sdfsas');
insert into menu_img(menu_img_no,store_menu_no,img)
values(51,14,'sdfsas');
