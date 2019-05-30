

CREATE DATABASE ZANGDOL DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

use ZANGDOL;

CREATE TABLE shelter(
    idx int(10) not null AUTO_INCREMENT,
    id varchar(100) not null,
    pw varchar(100) not null,
    name varchar(255) not null,
    position varchar(255) COMMENT '보호소 주소 앞에 값',
    position2 varchar(255) COMMENT '보호소 주소 뒤에 값',
    phone_number varchar(100),
    start_time time,
    end_time time ,
    description varchar(1000) COMMENT '보호소 설명 기입',
    volunteer_description varchar(1000) COMMENT '자원봉사에 대한 설명 기입란.',
    volunteer_start_time time COMMENT '자원봉사 가능 시작시간',
    volunteer_end_time time COMMENT '자원봉사 가능 종료시간',
    longitude varchar(20) COMMENT '좌표 longitude',
    latitude varchar(20) COMMENT '좌표 latitude',
    url_picture varchar(400) COMMENT '사진 url',
    auth int(1) default 0 COMMENT '보호소가 인증이 되었는지 0:인증안됨 / 1: 인증됨',
    UNIQUE(id),
    PRIMARY KEY(idx)
);

CREATE TABLE user(
    idx int(10) not null AUTO_INCREMENT,
    id varchar(100) not null,
    pw varchar(100) not null,
    nickname varchar(100) not null,
    phone_number varchar(100),
    email varchar(100),
    token varchar(1000),
    PRIMARY KEY(idx),
    UNIQUE(id)
);

CREATE TABLE animal(
    idx int(10) not null AUTO_INCREMENT,
    species_code int(10) COMMENT '견종 코드 ( 견종코드로 나타내는 것이 좋을 것 같음)',
    estimated_birth_age int(10) COMMENT '추정 태어난 연도',
    name varchar(100),
    sex char(1) COMMENT 'M:남 / W:여',
    weight int(10),
    url_picture varchar(400) COMMENT '사진 url',
    register_data date COMMENT '보호소에 등록된 날짜',
    discovered_spot varchar(400) COMMENT '발견된 장소',
    discovered_spot_latitude varchar(20) COMMENT '발견된 장소 latitude',
    discovered_spot_longitude varchar(20) COMMENT '발견된 장소 longitude',
    state int(3) COMMENT '견종 상태 - 0:안락사 / 1:보호소 보호중 / .... (점차 추가해야함)',
    shelter_idx int(10) not null COMMENT '보호중인 보호소 id',
    discover_idx int(10) COMMENT '발견했어요 id - null:발견했어요로 보호소에 가져오지 않았을 때 - 발견했어요 만들었을 때 FOREIGNKEY설정필요',
    description varchar(1000) COMMENT '유기동물 설명',
    PRIMARY KEY(idx),
    FOREIGN KEY(shelter_idx) REFERENCES shelter(idx)
);

CREATE TABLE schedule(
    idx int(10) not null AUTO_INCREMENT,
    date date COMMENT '스케쥴 날짜',
    user_idx int(10) not null COMMENT '사용자 id',
    animal_idx int(10) not null COMMENT 'animal id',
    permit int(1) default 0 COMMENT '1: 허가 / 0: 아직 결정안됨. / -1: 거절',
    apply_datetime datetime COMMENT '사용자가 요청한 날짜시간',
    read_state int(1) default 0 COMMENT '1: 처리, 0: 처리안함, -1: ?',
    PRIMARY KEY(idx),
    FOREIGN KEY(user_idx) REFERENCES user(idx),
    FOREIGN KEY(animal_idx) REFERENCES animal(idx)
);

CREATE TABLE discover(
    idx int(10) not null AUTO_INCREMENT,
    discover_datetime datetime COMMENT '유기동물을 발견한 날짜 및 시간',
    discovered_spot varchar(1000) COMMENT '유기동물을 발견한 장소',
    description varchar(1000) COMMENT '발견한 유기동물 특징',
    species_code int(10) COMMENT '견종 코드',
    animal_sex char(1) COMMENT '발견된 유기동물 성별',
    url_picture varchar(1000) COMMENT '발견된 유기동물 사진',
    register_datetime datetime COMMENT '발견했어요에 등록한 시간',
    user_idx int(10) not null COMMENT '등록한 유저 idx',
    matching_shelter_idx int(10) COMMENT '매칭된 shelter idx',
    longitude varchar(20) COMMENT '좌표 longitude',
    latitude varchar(20) COMMENT '좌표 latitude', 
    PRIMARY KEY(idx),
    FOREIGN KEY(user_idx) REFERENCES user(idx),
    FOREIGN KEY(matching_shelter_idx) REFERENCES shelter(idx)
);

CREATE TABLE discover_request(
    idx int(10) not null AUTO_INCREMENT,
    shelter_idx int(10) not null COMMENT '신청간 보호소 idx',
    discover_idx int(10) not null COMMENT '찾았어요 idx',
    read_state int(1) default 0 COMMENT '처리여부; 1:처리완료, 0:처리안함',
    register_datetime datetime COMMENT '요청을 보낸 시간날짜',
    permit int(1) default 0 COMMENT '1: 허가 / 0: 아직 결정안됨. / -1: 거절', 
    PRIMARY KEY(idx),
    FOREIGN KEY(discover_idx) REFERENCES discover(idx),
    FOREIGN KEY(shelter_idx) REFERENCES shelter(idx)
);

CREATE TABLE find(
    idx int(10) not null AUTO_INCREMENT,
    user_idx int(10) not null COMMENT '등록한 유저 idx',
    lost_datetime datetime COMMENT '유기동물을 잃어버린 날짜 및 시간',
    lost_spot varchar(1000) COMMENT '유기동물을 잃어버린 장소',
    description varchar(1000) COMMENT '잃어버린 유기동물 특징',
    species_code int(10) COMMENT '잃어버린 견종 코드',
    animal_sex char(1) COMMENT '잃어버린 유기동물 성별',
    url_picture varchar(1000) COMMENT '잃어버린 유기동물 사진',
    register_datetime datetime COMMENT '찾아요에 등록한 시간', 
    longitude varchar(20) COMMENT '잃어버린 위치 좌표 longitude',
    latitude varchar(20) COMMENT '잃어버린 위치 좌표 latitude',
    PRIMARY KEY(idx),
    FOREIGN KEY(user_idx) REFERENCES user(idx)  
);

CREATE TABLE adopt(
    idx int(10) not null AUTO_INCREMENT,
    animal_idx int(10) not null COMMENT '신청할 동물 idx',
    user_idx int(10) not null COMMENT '신청자 idx',
    datetime datetime not null COMMENT '신청 등록 날짜',
    user_name varchar(20) not null COMMENT '신청자 실명',
    address varchar(100) COMMENT '신청자 주소',
    address2 varchar(100) COMMENT '신청자 주소2',
    phone_number int(10) COMMENT '신청자 전화번호',
    user_email varchar(20) COMMENT '신청자 메일',
    q1 varchar(100) COMMENT '신청인과의 관계',
    q2 varchar(100) COMMENT '신청인의 주거 형태',
    q3 varchar(100) COMMENT '유기견이 지낼 곳',
    q4 varchar(100) COMMENT '주택 담 설치여부',
    q5 varchar(100) COMMENT '신분증 번호',
    q6 varchar(100) COMMENT '신청자 직업',
    q7 varchar(100) COMMENT '소셜미디어 아이디',
    q8 varchar(100) COMMENT '유기견 대소변 장소',
    q9 varchar(100) COMMENT '가족 소개',
    q10 varchar(100) COMMENT '유기견 책임자',
    q11 varchar(100) COMMENT '본인에게 강아지란',
    q12 varchar(100) COMMENT '학대받은 유기견 입양 가능여부',
    q13 varchar(100) COMMENT '치료가 필요한 유기견 입양 가능여부',
    q14 varchar(100) COMMENT '애완동물 키운 경험 유무',
    q15 varchar(100) COMMENT '현재 애완동물을 키우는지',
    q16 varchar(100) COMMENT '애완동물 키우는 종류와 수',
    q17 varchar(100) COMMENT '과거에 키웠던 애완동물 입양보낸 경력 여부',
    q18 varchar(100) COMMENT '입양동물의 여러 문제에 대한 입양자의 생각',
    q19 varchar(100) COMMENT '입양동물의 치료나 케어에 대한 금액을 아는지',
    q20 varchar(100) COMMENT '입양동물이 동물병원을 방문 할 주기와 방문목적',
    q21 varchar(100) COMMENT '입양동물에 필요한 치료 및 검진 예상금액',
    q22 varchar(100) COMMENT '입양동물과 하루를 어떻게 보내실 예정?',
    q23 varchar(100) COMMENT '여행/특별한 일정으로 집을 비우게 될 시 반려동물은 어떻게 지내게됩니까?',
    q24 varchar(100) COMMENT '전자서명 행위',
    PRIMARY KEY(idx),
    FOREIGN KEY(animal_idx) REFERENCES animal(idx)
);

INSERT INTO shelter(id,pw,name, position, url_picture) VALUES('test','test','테스트보호소', '서울 종로구 경교장1길 7-1', 'drive/animalImage/1.jpg');
INSERT INTO user(id,pw,phone_number,email,nickname) VALUES('test','test','01012345678','test@test.com', 'abccccc');

--test
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(1,'뽀삐',"drive/animalImage/1.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(3,'삐삐',"drive/animalImage/2.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(2,'뿌삐',"drive/animalImage/3.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(1,'아나',"drive/animalImage/4.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(3,'아마',"drive/animalImage/5.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(4,'가나',"drive/animalImage/6.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(5,'라마',"drive/animalImage/7.jpg",1,1);
INSERT INTO animal(species_code,name,shelter_idx,state) VALUES(2,'파카',1,1);
INSERT INTO animal(species_code,name,shelter_idx,state) VALUES(2,'나나나',1,1);
INSERT INTO animal(species_code,name,shelter_idx,state) VALUES(2,'가가가가가가',1,1);

INSERT INTO schedule(date,user_idx,animal_idx) VALUES ('2019-4-29',1,1);
INSERT INTO schedule(date,user_idx,animal_idx) VALUES ('2019-4-30',1,1);
