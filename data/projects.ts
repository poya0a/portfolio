export const projects = [
    {
        id: 'ailog',
        title: 'AI 블로그 플랫폼',
        description: 'AI를 활용해 글 제목, 요약, 태그를 자동으로 생성할 수 있는 블로그 플랫폼',
        stack: [
            'Next.js',
            'Supabase',
            'TypeScript',
            'OpenAI API',
            'SCSS'
        ],
        details: `
            AI 기반 글 제목, 요약, 태그 자동 생성 기능 제공
            사용자가 직접 제목, 요약, 태그를 입력하고 수정할 수 있는 편집 기능
            Supabase를 활용한 게시글 CRUD(작성, 조회, 수정, 삭제) 구현
            Next.js SSR 기반 SEO 최적화 페이지 구성
            반응형 UI와 SCSS 스타일링으로 다양한 화면 지원
        `,
        url: 'https://ailog-seven.vercel.app',
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
            'SCSS',
        ],
        details: `
            TipTap 기반 리치 텍스트 에디터 구현
            Y.js + Hocuspocus를 활용한 실시간 문서 동기화 및 충돌 없는 편집(CRDT)
            사용자 커서 위치 및 포인터 실시간 표시(Awareness)
            제목과 본문 분리 동기화 (Y.Map + Y.XmlFragment)
            문서 삭제 시 모든 접속자에게 실시간 알림 및 세션 종료 처리
        `,
        url: 'https://note-together-kappa.vercel.app',
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
            'SCSS',
        ],
        details: `
            Firebase Auth 기반 로그인 및 사용자 상태 관리
            개인 일정 / 그룹 일정 분리 조회 및 관리
            그룹 생성, 초대 코드 기반 그룹 참여 기능
            그룹 소유자 권한 기반 일정 추가·삭제 제어
            날짜별 일정 색상 태그 표시 (캘린더 dot UI)
            React Calendar 기반 월/일 단위 일정 조회
        `,
        url: 'https://studysync-two.vercel.app',
    },

    // {
    //     id: 'studysync-admin',
    //     title: 'StudySync Admin & Data Platform',
    //     description: 'StudySync 서비스 운영을 위한 관리자 대시보드 및 대규모 데이터 테이블 기반 어드민',
    //     stack: [
    //         'Next.js',
    //         'TypeScript',
    //         'TanStack Query',
    //         'Zustand',
    //         'Supabase',
    //         'SCSS',
    //         'Recharts',
    //     ],
    //     details: `
    //         StudySync 서비스 데이터를 기반으로 한 관리자 전용 어드민 대시보드
    //         사용자 / 스터디 / 일정 데이터를 테이블 형태로 조회 및 관리
    //         서버 사이드 pagination, 검색, 필터, 정렬 기능 구현
    //         React Query 기반 서버 상태 캐싱 및 query key 설계
    //         URL Query와 테이블 상태 동기화 (뒤로가기, 새로고침 대응)
    //         재사용 가능한 DataTable 컴포넌트 아키텍처 설계
    //         실제 서비스 운영 시나리오를 가정한 관리자 UX 구현
    //     `,
    //     url: '',
    // },

    // {
    //     id: 'chatly',
    //     title: 'Flutter 실시간 채팅 앱',
    //     description: 'Firebase 기반의 모바일 크로스플랫폼 실시간 채팅 애플리케이션',
    //     stack: [
    //         'Flutter',
    //         'Dart',
    //         'Firebase Auth',
    //         'Firebase Realtime Database',
    //         'Firebase Cloud Messaging',
    //     ],
    //     details: `
    //         Firebase Realtime Database 기반 실시간 메시지 송수신
    //         Firebase Auth를 활용한 사용자 인증 및 세션 관리
    //         1:1 채팅 및 그룹 채팅 기능 구현
    //         메시지 읽음 처리 및 전송 시간 표시
    //         사용자 온라인 상태 표시
    //         FCM 기반 푸시 알림 연동
    //     `,
    //     url: '',
    // },

    // {
    //     id: 'mapbook',
    //     title: '지도 기반 장소 관리 서비스',
    //     description: '지도 위에서 장소를 저장하고 공유할 수 있는 위치 기반 웹 서비스',
    //     stack: [
    //         'React',
    //         'Kakao Maps API',
    //         'Supabase',
    //         'TypeScript',
    //         'SCSS',
    //     ],
    //     details: `
    //         Kakao Maps API를 활용한 지도 렌더링 및 마커 표시
    //         사용자별 장소 저장 및 즐겨찾기 관리
    //         카테고리 및 태그 기반 장소 필터링
    //         지도와 리스트 UI 상태 동기화
    //         반응형 지도 UI 구성
    //     `,
    //     url: '',
    // },
];