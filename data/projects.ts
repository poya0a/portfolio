export const projects = [
    {
        id: 'auth-system',
        title: '회원 인증 시스템 (React + Firebase)',
        description: '회원가입, 로그인, 비밀번호 재설정 기능 구현.',
        stack: ['React', 'Firebase', 'SCSS'],
        details: `
            - Firebase Authentication 이용  
            - 이메일 찾기 / 비밀번호 재설정 / 자동 로그인 구현  
            - 폼 검증 및 에러 핸들링 추가  
            `
    },
    {
        id: 'board',
        title: '게시판 CRUD (React + Firebase)',
        description: '게시글 목록, 작성, 수정, 삭제, 페이지네이션 구현.',
        stack: ['React', 'Firebase', 'Pagination'],
        details: `
            - Firestore 기반 CRUD  
            - 페이지네이션 (10개 단위)  
            - 글 수정/삭제 시 권한 체크  
            `
    },
    {
        id: 'chat-app',
        title: '실시간 채팅 Flutter 앱',
        description: 'Dart로 만든 간단한 실시간 채팅 앱',
        stack: ['Flutter', 'Firebase', 'Dart'],
        details: `
            - Firebase Realtime DB 사용  
            - 실시간 메시지 송수신  
            - 사용자 닉네임 기반 채팅룸  
            `
    },
    {
        id: 'favorites',
        title: '즐겨찾기 기능 구현',
        description: '리스트 항목 즐겨찾기 추가/삭제 및 필터링 기능',
        stack: ['React', 'Hooks', 'LocalStorage'],
        details: `
            - useState + useEffect로 상태 관리  
            - 즐겨찾기 목록 로컬 저장  
            `
    },
    {
        id: 'map-view',
        title: '지도 표시 (카카오 & 네이버 API)',
        description: '임시 데이터 기반 위치 표시 기능',
        stack: ['React', 'Kakao Maps API', 'Naver Maps API'],
        details: `
            - Kakao / Naver 지도 SDK 연동  
            - 여러 좌표 마커 표시 및 InfoWindow  
            `
    },
    {
        id: 'fullstack-toy',
        title: '풀스택 토이 프로젝트 (Next.js + MySQL + PHP)',
        description: 'Next.js 프론트 + PHP API + MySQL 백엔드',
        stack: ['Next.js', 'MySQL', 'PHP'],
        details: `
            - API 라우팅 → PHP 서버 연동  
            - 간단한 로그인 + 데이터 CRUD  
            - 서버 DB와 연동된 SSR 페이지 구현  
            `
    }
]
