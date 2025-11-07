export const projects = [
    {
        id: 'ailog',
        title: 'AI 블로그 플랫폼',
        description: 'AI를 활용해 글 제목, 요약, 태그, 썸네일 이미지를 자동으로 생성하는 지능형 블로그 플랫폼',
        stack: ['Next.js', 'Supabase', 'TypeScript', 'OpenAI API', 'SCSS'],
        details: `
            OpenAI API로 자동 요약 및 태그 생성
            Supabase DB를 통한 게시글 관리 (CRUD)
            AI 이미지 자동 추천 (DALL·E or Image API)
            SSR + SEO 최적화 구조 
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
        url : ""
    },
    {
        id: 'studysync',
        title: '스터디 일정 관리 캘린더',
        description: '개인 및 그룹 스터디 일정 관리를 위한 캘린더형 웹앱',
        stack: ['Next.js', 'React Calendar', 'Firebase Auth', 'SCSS'],
        details: `
            Google/Firebase Auth 로그인
            React Calendar 기반 일정 등록/삭제
            일정 색상 태그 및 메모 기능
            로컬/원격 동기화 지원
            `,
        url : ""
    },
    {
        id: 'board',
        title: '게시판 CRUD',
        description: 'Firebase를 이용한 간단하고 직관적인 CRUD 게시판',
        stack: ['React', 'Firebase Firestor', 'SCSS'],
        details: `
            Firestore CRUD (글 작성, 수정, 삭제, 목록
            Pagination (10개 단위)
            로그인 사용자만 수정/삭제 가능
            간단한 검색 및 정렬 기능 
            `,
        url : ""
    },
    {
        id: 'chatly',
        title: 'Flutter 실시간 채팅 앱',
        description: 'Firebase 기반의 하이브리드 실시간 채팅 앱',
        stack: ['Flutter', 'Dart', 'Firebase Realtime DB'],
        details: `
            실시간 메시지 송수신 (Realtime DB)
            사용자 닉네임 기반 대화방 생성
            읽음 처리 및 시간 표시
            Firebase Hosting으로 웹 미리보기 지원
            `,
        url : ""
    },
    {
        id: 'mapbook',
        title: '즐겨찾기 + 지도 표시 앱',
        description: '지도 위에서 즐겨찾기를 관리할 수 있는 위치 기반 앱',
        stack: ['React', 'Kakao Maps API', 'LocalStorage', 'SCSS'],
        details: `
            Kakao Maps SDK 연동 및 마커 표시
            장소 등록 / 즐겨찾기 / 삭제
            로컬 데이터 저장 및 필터링
            반응형 지도 UI
            `,
        url : ""
    }
]
