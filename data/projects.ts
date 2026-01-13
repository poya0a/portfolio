export const projects = [
    {
        id: 'ailog',
        title: 'AI 블로그 플랫폼',
        description: 'AI를 활용해 글 제목, 요약, 태그를 자동으로 생성할 수 있는 블로그 플랫폼',
        stack: ['Next.js', 'Supabase', 'TypeScript', 'OpenAI API', 'SCSS'],
        details: `
            AI를 활용한 글 제목 · 요약 · 태그 자동 생성 기능
            사용자가 직접 제목, 요약, 태그를 입력할 수 있는 편집 기능 제공
            Supabase DB를 활용한 게시글 CRUD(작성·조회·수정·삭제) 구현
            Next.js 기반 SSR 구조로 SEO를 고려한 페이지 구성
            반응형 UI 및 SCSS 기반 스타일링
            `,
        url : "https://ailog-seven.vercel.app"
    },
    {
        id: 'notetogether',
        title: '실시간 협업 메모 앱',
        description: '하나의 링크로 여러 명이 동시에 문서를 작성·수정할 수 있는 실시간 협업 에디터',
        stack: ['React', 'TipTap', 'Y.js', 'Zustand', 'SCSS'],
        details: ` 
            TipTap 기반 리치 텍스트 에디터
            Y.js를 이용한 실시간 동기화
            커서 위치/사용자 표시
            문서 공유 링크 생성
            `,
        url : "https://note-together-kappa.vercel.app"
    },
    // {
    //     id: 'studysync',
    //     title: '스터디 일정 관리 캘린더',
    //     description: '개인 및 그룹 스터디 일정 관리를 위한 캘린더형 웹앱',
    //     stack: ['Next.js', 'React Calendar', 'Firebase Auth', 'SCSS'],
    //     details: `
    //         Google/Firebase Auth 로그인
    //         React Calendar 기반 일정 등록/삭제
    //         일정 색상 태그 및 메모 기능
    //         로컬/원격 동기화 지원
    //         `,
    //     url : ""
    // },
    // {
    //     id: 'board',
    //     title: '게시판 CRUD',
    //     description: 'Firebase를 이용한 간단하고 직관적인 CRUD 게시판',
    //     stack: ['React', 'Firebase Firestor', 'SCSS'],
    //     details: `
    //         Firestore CRUD (글 작성, 수정, 삭제, 목록
    //         Pagination (10개 단위)
    //         로그인 사용자만 수정/삭제 가능
    //         간단한 검색 및 정렬 기능 
    //         `,
    //     url : ""
    // },
    // {
    //     id: 'chatly',
    //     title: 'Flutter 실시간 채팅 앱',
    //     description: 'Firebase 기반의 하이브리드 실시간 채팅 앱',
    //     stack: ['Flutter', 'Dart', 'Firebase Realtime DB'],
    //     details: `
    //         실시간 메시지 송수신 (Realtime DB)
    //         사용자 닉네임 기반 대화방 생성
    //         읽음 처리 및 시간 표시
    //         Firebase Hosting으로 웹 미리보기 지원
    //         `,
    //     url : ""
    // },
    // {
    //     id: 'mapbook',
    //     title: '즐겨찾기 + 지도 표시 앱',
    //     description: '지도 위에서 즐겨찾기를 관리할 수 있는 위치 기반 앱',
    //     stack: ['React', 'Kakao Maps API', 'LocalStorage', 'SCSS'],
    //     details: `
    //         Kakao Maps SDK 연동 및 마커 표시
    //         장소 등록 / 즐겨찾기 / 삭제
    //         로컬 데이터 저장 및 필터링
    //         반응형 지도 UI
    //         `,
    //     url : ""
    // }
]
