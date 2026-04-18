# LCK LAB Design System

이 저장소는 **LCK LAB** (연구자동화 및 AI 센터)의 브랜드 가이드라인과 UI 요소를 정의하는 디자인 시스템입니다. 최첨단 연구 기반의 다크 모드 특화 시스템으로 기획되었습니다.

## 1. Brand Identity
- **회사명**: LCK LAB
- **주요 서비스**: AI 에이전트, 연구 자동화, 병원/기업 데이터를 위한 고급 인텔리전스 분석
- **톤앤매너**: 
  - 미래지향적 (Futuristic)
  - 차갑고 예리한 전문성 (Precision & Cutting-edge)
  - 프리미엄 (High-end Research)

## 2. Design Tokens

### 2.1. Colors
어두운 심연(연구) 공간에서 반짝이는 AI의 빛을 컨셉으로 삼았습니다.

* **Deep Navy (`#0A192F`) & Dark Background (`#020C1B`)**
  * **의미**: 메인 베이스 컬러. 무한한 지식의 공간과 신뢰성.
  * **사용처**: 사이트 배경, 컨테이너 배경, 모달 백그라운드.
* **Electric Cyan (`#00E5FF`)**
  * **의미**: AI, 자동화 프로세스의 실행 라인.
  * **사용처**: 중요한 인터랙티브 버튼(실행/분석), 활성 상태(Active state), 그래프 하이라이트 지표.
* **Premium Gold (`#D4AF37`)**
  * **의미**: LCK Lab이 도출해낸 프리미엄 퀄리티의 결과물, 자부심.
  * **사용처**: 최고 관리자 권한, 특별한 알림표시, 하이엔드 테마 분리 구역.
* **Blue Gray (`#8892B0`)**
  * **의미**: 부수적인 정보
  * **사용처**: 서브 텍스트, 비활성화 컴포넌트

### 2.2. Typography
* **영문/숫자 (Primary)**: `Inter`, `Roboto Mono`
* **국문 (Secondary)**: `Pretendard`
* 숫자 데이터나 로그(log)가 빈번히 화면에 출력되는 랩스(Labs) 특성을 고려해, 모노스페이스(등폭) 폰트를 혼용하여 세련미를 더합니다.

### 2.3. Layout & Styling
* **Glassmorphism (유리 질감)**: `bg-white/5` 와 `backdrop-blur-md` 등의 속성을 배합하여 깊이감을 만들어냅니다.
* **Glow Effect (광원 효과)**: Cyan 컬러를 이용한 네온 광원 효과(`box-shadow`)로 클릭 유도를 만듭니다.
* **Edges**: 아주 약간 둥근 모서리(`rounded-md`, 4px ~ 6px)로, 트렌디하면서도 날카롭고 이성적인 느낌을 유지합니다.

## 3. 로고 (Logo)
LCK LAB 로고 미디어 파일(`lck_lab_logo.png`)은 저장소에 함께 포함되거나 CND에서 배포됩니다. 심볼은 'L'과 'C'를 형상화한 디지털 플라스크 형태로, 연구와 사이버네틱스 환경을 결합한 상징입니다.
