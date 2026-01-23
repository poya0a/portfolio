export const projects = [
    {
        id: 'ailog',
        title: 'AI 블로그 플랫폼',
        description: 'AI를 활용해 글 제목, 요약, 태그를 자동으로 생성할 수 있는 블로그 플랫폼',
        stack: ['Next.js', 'Supabase', 'TypeScript', 'OpenAI API', 'SCSS'],
        details: `
            AI 기반 글 제목, 요약, 태그 자동 생성 기능 제공
            사용자가 직접 제목, 요약, 태그를 입력하고 수정할 수 있는 편집 기능
            Supabase를 활용한 게시글 CRUD(작성, 조회, 수정, 삭제) 구현
            Next.js SSR 기반 SEO 최적화 페이지 구성
            반응형 UI와 SCSS 스타일링으로 다양한 화면 지원
            `,
        url : "https://ailog-seven.vercel.app"
    },
    {
        id: 'notetogether',
        title: '실시간 협업 에디터',
        description: '하나의 링크로 여러 사용자가 동시에 편집하고 변경 사항을 즉시 공유할 수 있는 실시간 협업 문서 편집기',
        stack: [
            'Next.js',
            'React',
            'TipTap',
            'Y.js',
            'Hocuspocus',
            'Zustand',
            'SCSS'
        ],
        details: `
            TipTap 기반 리치 텍스트 에디터 구현
            Y.js + Hocuspocus를 활용한 실시간 문서 동기화 및 충돌 없는 편집(CRDT)
            사용자 커서 위치 및 포인터 실시간 표시(Awareness)
            제목과 본문 분리 동기화 (Y.Map + Y.XmlFragment)
            문서 삭제 시 모든 접속자에게 실시간 알림 및 세션 종료 처리
        `,
        url : "https://note-together-kappa.vercel.app"
    },
    {
        id: 'studysync',
        title: '스터디 일정 관리 캘린더',
        description: '개인 및 그룹 스터디 일정 관리를 위한 캘린더형 웹앱',
        stack: [
            'Next.js',
            'React',
            'React Calendar',
            'Firebase Auth',
            'Firestore',
            'Zustand',
            'SCSS'
        ],
        details: `
            Firebase Auth 기반 로그인 및 사용자 상태 관리
            개인 일정 / 그룹 일정 분리 조회 및 관리
            그룹 생성, 초대 코드 기반 그룹 참여 기능
            그룹 소유자 권한 기반 일정 추가·삭제 제어
            날짜별 일정 색상 태그 표시 (캘린더 dot UI)
            React Calendar 기반 월/일 단위 일정 조회
        `,
        url : "https://studysync-two.vercel.app"
    },
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
