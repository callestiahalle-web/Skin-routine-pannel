const APP_VERSION='v14-notes-icon';

const SCHEDULE = {"Понедельник": {"Утро": [["Round Lab 1025 Dokdo Cleanser или вода", "Пенка 30–40 сек, смыть. Если кожа спокойная — можно только вода."], ["Ma:nyo Bifida Biome Ampoule Toner", "Нанести ладонями, подождать 1 мин."], ["VT Cosmetics Reedle Shot Lifting Eye Cream с бакучиолом", "Количество с рисовое зерно, не близко к слизистой."], ["Round Lab Birch Juice SPF / SPF Cushion", "Нанести за 15 мин до выхода. Обязательно на шею."]], "Вечер — микротоки": [["Pyunkang Yul Deep Clear Cleansing Balm", "Если был SPF/макияж: 40–60 сек на сухую кожу, эмульгировать водой, смыть."], ["Round Lab 1025 Dokdo Cleanser", "20–30 сек, смыть. Кожа должна быть чистой перед гелем."], ["Mesomatrix гель для микротоков", "Нанести толстым слоем на чистую кожу."], ["Микротоковый аппарат", "10–15 мин по массажным линиям. Не работать по щитовидной железе и подвижному веку."], ["Ma:nyo Bifida Biome Ampoule Toner", "После снятия/смывания геля нанести тонер, подождать 1 мин."], ["Celimax Dual Barrier Skin Wearable Cream", "Средний слой для восстановления барьера."], ["Laneige Lip Sleeping Mask EX Berry", "Последний этап, плотный слой на губы."]]}, "Вторник": {"Утро": [["Вода или Round Lab 1025 Dokdo Cleanser", "Если кожа чувствительная после микротоков — только вода."], ["Ma:nyo Bifida Biome Ampoule Toner", "Нанести ладонями, 1 мин."], ["Round Lab капсульный крем с витамином C или Celimax Dual Barrier", "Витамин C — если нет красноты; Celimax — если кожа чувствительная."], ["VT Cosmetics Reedle Shot Lifting Eye Cream", "Малое количество вокруг орбитальной косточки."], ["Round Lab Birch Juice SPF / SPF Cushion", "SPF обязателен."]], "Вечер — ретиноид Celimax": [["Pyunkang Yul Deep Clear Cleansing Balm", "Если был SPF/макияж: 40–60 сек, смыть."], ["Round Lab 1025 Dokdo Cleanser", "20–30 сек, смыть."], ["Ma:nyo Bifida Biome Ampoule Toner", "Нанести и подождать 10–15 мин, чтобы кожа стала сухой."], ["Celimax The Vita-A Retinal Shot Tightening Booster / Celimax The Vita-A Retinol Shot Tightening Serum", "Чередовать по неделям. Горошина на лицо. Не наносить на подбородок/шею перед активами, крылья носа, уголки губ и близко к глазам."], ["Celimax Dual Barrier Skin Wearable Cream", "Через 10–15 мин после ретиноида."], ["Laneige Lip Sleeping Mask EX Berry", "Плотный слой. Можно заранее защитить уголки губ."]]}, "Среда": {"Утро": [["Вода или Round Lab 1025 Dokdo Cleanser", "Мягкое очищение после ретиноида."], ["Ma:nyo Bifida Biome Ampoule Toner", "1 мин."], ["Celimax Dual Barrier Skin Wearable Cream", "Лучше выбрать Celimax, если есть сухость/краснота."], ["VT Cosmetics Reedle Shot Lifting Eye Cream", "Тонкий слой."], ["Round Lab Birch Juice SPF / SPF Cushion", "Обязательно."]], "Вечер — восстановление и спокойный уход": [["Pyunkang Yul Deep Clear Cleansing Balm", "Если был SPF/макияж: мягко растворить на сухой коже 40–60 сек, затем смыть."], ["Round Lab 1025 Dokdo Cleanser", "20–30 сек, без активного трения, смыть тёплой водой."], ["Ma:nyo Bifida Biome Ampoule Toner", "Нанести ладонями, подождать 1 мин. Это вечер без активов."], ["Celimax Dual Barrier Skin Wearable Cream", "Средний или чуть плотный слой для поддержки барьера."], ["Laneige Lip Sleeping Mask EX Berry", "Последний этап, плотный слой на губы."]]}, "Четверг": {"Утро": [["Вода или Round Lab 1025 Dokdo Cleanser", "Без активного трения."], ["Ma:nyo Bifida Biome Ampoule Toner", "1 мин."], ["Celimax Dual Barrier Skin Wearable Cream", "В день аппаратных процедур не наносить активы на подбородок и шею."], ["VT Cosmetics Reedle Shot Lifting Eye Cream", "Тонкий слой."], ["Round Lab Birch Juice SPF / SPF Cushion", "SPF обязательно."]], "Вечер — восстановление и спокойный уход": [["Pyunkang Yul Deep Clear Cleansing Balm", "Если был SPF/макияж: мягко растворить на сухой коже 40–60 сек, затем смыть."], ["Round Lab 1025 Dokdo Cleanser", "20–30 сек, без активного трения, смыть тёплой водой."], ["Ma:nyo Bifida Biome Ampoule Toner", "Нанести ладонями, подождать 1 мин. Это вечер без активов."], ["Celimax Dual Barrier Skin Wearable Cream", "Средний или чуть плотный слой для поддержки барьера."], ["Laneige Lip Sleeping Mask EX Berry", "Последний этап, плотный слой на губы."]]}, "Пятница": {"Утро": [["Вода или Round Lab 1025 Dokdo Cleanser", "После аппаратных процедур максимально мягко."], ["Ma:nyo Bifida Biome Ampoule Toner", "1 мин."], ["Celimax Dual Barrier Skin Wearable Cream", "На лицо, подбородок и шею."], ["VT Cosmetics Reedle Shot Lifting Eye Cream", "Тонкий слой."], ["Round Lab Birch Juice SPF / SPF Cushion", "Обязательно на лицо, шею."]], "Вечер — восстановление и спокойный уход": [["Pyunkang Yul Deep Clear Cleansing Balm", "Если был SPF/макияж: мягко растворить на сухой коже 40–60 сек, затем смыть."], ["Round Lab 1025 Dokdo Cleanser", "20–30 сек, без активного трения, смыть тёплой водой."], ["Ma:nyo Bifida Biome Ampoule Toner", "Нанести ладонями, подождать 1 мин. Это вечер без активов."], ["Celimax Dual Barrier Skin Wearable Cream", "Средний или чуть плотный слой для поддержки барьера."], ["Laneige Lip Sleeping Mask EX Berry", "Последний этап, плотный слой на губы."]]}, "Суббота": {"Утро": [["Вода или Round Lab 1025 Dokdo Cleanser", "Мягкое очищение."], ["Ma:nyo Bifida Biome Ampoule Toner", "1 мин."], ["Round Lab капсульный крем с витамином C или Celimax Dual Barrier", "Если есть чувствительность после активов/аппаратов — Celimax."], ["VT Cosmetics Reedle Shot Lifting Eye Cream", "Тонко."], ["Round Lab Birch Juice SPF / SPF Cushion", "SPF обязателен."]], "Вечер — RF-лифтинг": [["Pyunkang Yul Deep Clear Cleansing Balm", "Если был SPF/макияж."], ["Round Lab 1025 Dokdo Cleanser", "20–30 сек, смыть."], ["Mesomatrix гель для RF-лифтинга", "Очень щедрый слой."], ["RF-лифтинг аппарат", "8–10 мин первые процедуры, затем 10–15 мин. Комфортное тепло, не задерживать насадку, чувствительные зоны пропускать."], ["Ma:nyo Bifida Biome Ampoule Toner", "После снятия/смывания геля."], ["Celimax Dual Barrier Skin Wearable Cream", "Восстанавливающий слой."], ["Laneige Lip Sleeping Mask EX Berry", "Последний этап."]]}, "Воскресенье": {"Утро": [["Вода или Round Lab 1025 Dokdo Cleanser", "Мягкое очищение."], ["Ma:nyo Bifida Biome Ampoule Toner", "1 мин."], ["Celimax Dual Barrier Skin Wearable Cream", "Лучше после RF/аппаратных процедур недели."], ["VT Cosmetics Reedle Shot Lifting Eye Cream", "Тонко."], ["Round Lab Birch Juice SPF / SPF Cushion", "SPF обязательно."]], "Вечер — восстановление / Anua по переносимости": [["Pyunkang Yul Deep Clear Cleansing Balm", "Если был SPF/макияж."], ["Round Lab 1025 Dokdo Cleanser", "20–30 сек, смыть."], ["Ma:nyo Bifida Biome Ampoule Toner", "1 мин."], ["Anua Azelaic Acid 10 Hyaluron Redness Soothing Serum", "Только если кожа спокойная. Нанести тонко на лицо, избегая чувствительных зон. Подождать 5–10 мин."], ["Celimax Dual Barrier Skin Wearable Cream", "Закрыть уход."], ["Laneige Lip Sleeping Mask EX Berry", "Последний этап."]]}};
const RULES = ["Ретиноиды Celimax и Anua Azelaic Acid 10% лучше использовать в разные вечера, чтобы не перегружать кожу.", "После ретиноидов, RF, микротоков и маски-плёнки делайте упор на восстановление: Ma:nyo toner → Celimax Dual Barrier.", "Если появилось жжение, шелушение или стойкая краснота, на 3–7 дней оставьте только мягкое очищение, тонер, барьерный крем и SPF.", "Arocell маску лучше делать 1 раз в 10–14 дней и не совмещать в один вечер с ретиноидами, азелаиновой кислотой или аппаратами.", "SPF Round Lab — каждый день утром, даже если погода пасмурная.", "RF и микротоки не делайте по раздражённой коже, ранкам и зонам с активным воспалением.", "Лучший результат даёт регулярность: мягкий уход каждый день важнее большого количества активов."];
const PRODUCTS = [{"name": "Pyunkang Yul Deep Clear Cleansing Balm", "category": "Очищение", "desc": "Гидрофильный бальзам для первого этапа вечернего очищения: снимает SPF, кушон и макияж; после него обязательно используйте пенку Round Lab, особенно перед аппаратными процедурами.", "img": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CjxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmZmZmYiLz4KICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y3ZjJmOCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJzaGluZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwLjk1KSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGlkPSJzaGFkb3ciIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiPgogICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjgiIHN0ZERldmlhdGlvbj0iMTAiIGZsb29kLWNvbG9yPSIjYjliZmQwIiBmbG9vZC1vcGFjaXR5PSIuMTYiLz4KICA8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcng9Ijg2IiBmaWxsPSJ1cmwoI2JnKSIvPgo8Y2lyY2xlIGN4PSI0MTAiIGN5PSI4OCIgcj0iNDQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii41NSIvPgo8Y2lyY2xlIGN4PSIxMDQiIGN5PSI0MDQiIHI9IjY2IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIuNDIiLz4KCjxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICA8ZWxsaXBzZSBjeD0iMjU2IiBjeT0iMzc1IiByeD0iMTEwIiByeT0iMTgiIGZpbGw9IiNkNWRjZTciIG9wYWNpdHk9Ii40MiIvPgogIDxyZWN0IHg9IjE0NSIgeT0iMTUyIiB3aWR0aD0iMjIyIiBoZWlnaHQ9IjE2OCIgcng9IjQyIiBmaWxsPSIjZDhjMWE4Ii8+CiAgPHJlY3QgeD0iMTY1IiB5PSIxMjAiIHdpZHRoPSIxODIiIGhlaWdodD0iNDYiIHJ4PSIxOCIgZmlsbD0iI2E2ODA2MyIvPgogIDxyZWN0IHg9IjE3NiIgeT0iMTk5IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjgyIiByeD0iMjIiIGZpbGw9IiNmZmZkZmIiIG9wYWNpdHk9Ii45NiIvPgogIDxyZWN0IHg9IjE3NiIgeT0iMTk5IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iI2Q4YzFhOCIgb3BhY2l0eT0iLjE4Ii8+CiAgPHRleHQgeD0iMjU2IiB5PSIyNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyOCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzZhNjE3MyI+QkFMTTwvdGV4dD4KICA8dGV4dCB4PSIyNTYiIHk9IjI2OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjYTA4ZjhhIj5jYXJlPC90ZXh0Pgo8L2c+Cjwvc3ZnPg=="}, {"name": "Round Lab 1025 Dokdo Cleanser", "category": "Очищение", "desc": "Мягкая пенка для второго этапа очищения вечером и для утреннего умывания по необходимости; не держите её слишком долго, чтобы не усиливать сухость и красноту.", "img": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CjxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmZmZmYiLz4KICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y3ZjJmOCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJzaGluZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwLjk1KSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGlkPSJzaGFkb3ciIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiPgogICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjgiIHN0ZERldmlhdGlvbj0iMTAiIGZsb29kLWNvbG9yPSIjYjliZmQwIiBmbG9vZC1vcGFjaXR5PSIuMTYiLz4KICA8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcng9Ijg2IiBmaWxsPSJ1cmwoI2JnKSIvPgo8Y2lyY2xlIGN4PSI0MTAiIGN5PSI4OCIgcj0iNDQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii41NSIvPgo8Y2lyY2xlIGN4PSIxMDQiIGN5PSI0MDQiIHI9IjY2IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIuNDIiLz4KCjxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICA8ZWxsaXBzZSBjeD0iMjU2IiBjeT0iMzkwIiByeD0iOTUiIHJ5PSIxNiIgZmlsbD0iI2Q1ZGNlNyIgb3BhY2l0eT0iLjQyIi8+CiAgPHBhdGggZD0iTTE3OCAxMjZoMTU2bC0xOCAyNThIMTk2bC0xOC0yNTh6IiBmaWxsPSIjYmNkNWU1Ii8+CiAgPHBhdGggZD0iTTE5MiAxMjZoMTI4bC0xMiA0NkgyMDRsLTEyLTQ2eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iLjQyIi8+CiAgPHJlY3QgeD0iMjE0IiB5PSIzODQiIHdpZHRoPSI4NCIgaGVpZ2h0PSIzNCIgcng9IjEwIiBmaWxsPSIjZjhmOGY4Ii8+CiAgPHJlY3QgeD0iMjAwIiB5PSIxODUiIHdpZHRoPSIxMTIiIGhlaWdodD0iMTA4IiByeD0iMjIiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii45NSIvPgogIDxyZWN0IHg9IjIwMCIgeT0iMTg1IiB3aWR0aD0iMTEyIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iI2RjZTdmMCIgb3BhY2l0eT0iLjc1Ii8+CiAgPHRleHQgeD0iMjU2IiB5PSIyMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzNCIgZm9udC13ZWlnaHQ9IjgwMCIgZmlsbD0iIzYyNzc4YyI+MTAyNTwvdGV4dD4KICA8dGV4dCB4PSIyNTYiIHk9IjI2MiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjOGRhM2I3Ij5kb2tkbyBjbGVhbnNlcjwvdGV4dD4KPC9nPgo8L3N2Zz4="}, {"name": "Round Lab Vitamin C / Niacinamide Capsule Cream", "category": "Крем утро", "desc": "Утренний крем для сияния и более ровного тона; если кожа раздражена после активов или процедур, лучше временно заменить его на Celimax Dual Barrier.", "img": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CjxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmZmZmYiLz4KICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y3ZjJmOCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJzaGluZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwLjk1KSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGlkPSJzaGFkb3ciIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiPgogICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjgiIHN0ZERldmlhdGlvbj0iMTAiIGZsb29kLWNvbG9yPSIjYjliZmQwIiBmbG9vZC1vcGFjaXR5PSIuMTYiLz4KICA8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcng9Ijg2IiBmaWxsPSJ1cmwoI2JnKSIvPgo8Y2lyY2xlIGN4PSI0MTAiIGN5PSI4OCIgcj0iNDQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii41NSIvPgo8Y2lyY2xlIGN4PSIxMDQiIGN5PSI0MDQiIHI9IjY2IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIuNDIiLz4KCjxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICA8ZWxsaXBzZSBjeD0iMjU2IiBjeT0iMzc1IiByeD0iMTEwIiByeT0iMTgiIGZpbGw9IiNkNWRjZTciIG9wYWNpdHk9Ii40MiIvPgogIDxyZWN0IHg9IjE0NSIgeT0iMTUyIiB3aWR0aD0iMjIyIiBoZWlnaHQ9IjE2OCIgcng9IjQyIiBmaWxsPSIjZmZjOTdhIi8+CiAgPHJlY3QgeD0iMTY1IiB5PSIxMjAiIHdpZHRoPSIxODIiIGhlaWdodD0iNDYiIHJ4PSIxOCIgZmlsbD0iI2YyYjM1OSIvPgogIDxyZWN0IHg9IjE3NiIgeT0iMTk5IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjgyIiByeD0iMjIiIGZpbGw9IiNmZmZkZmIiIG9wYWNpdHk9Ii45NiIvPgogIDxyZWN0IHg9IjE3NiIgeT0iMTk5IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iI2ZmYzk3YSIgb3BhY2l0eT0iLjE4Ii8+CiAgPHRleHQgeD0iMjU2IiB5PSIyNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyOCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzZhNjE3MyI+VklUIEM8L3RleHQ+CiAgPHRleHQgeD0iMjU2IiB5PSIyNjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iI2EwOGY4YSI+Y2FyZTwvdGV4dD4KPC9nPgo8L3N2Zz4="}, {"name": "Celimax The Vita-A Retinal Shot Tightening Booster", "category": "Ретиналь", "desc": "Актив с ретиналем для текстуры, упругости и тона; используется вечером на сухую кожу, не совмещается с ретинолом, азелаиновой кислотой и процедурами.", "img": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CjxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmZmZmYiLz4KICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y3ZjJmOCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJzaGluZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwLjk1KSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGlkPSJzaGFkb3ciIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiPgogICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjgiIHN0ZERldmlhdGlvbj0iMTAiIGZsb29kLWNvbG9yPSIjYjliZmQwIiBmbG9vZC1vcGFjaXR5PSIuMTYiLz4KICA8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcng9Ijg2IiBmaWxsPSJ1cmwoI2JnKSIvPgo8Y2lyY2xlIGN4PSI0MTAiIGN5PSI4OCIgcj0iNDQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii41NSIvPgo8Y2lyY2xlIGN4PSIxMDQiIGN5PSI0MDQiIHI9IjY2IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIuNDIiLz4KCjxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICA8ZWxsaXBzZSBjeD0iMjU2IiBjeT0iMzkwIiByeD0iODQiIHJ5PSIxNCIgZmlsbD0iI2Q1ZGNlNyIgb3BhY2l0eT0iLjQyIi8+CiAgPHJlY3QgeD0iMjE4IiB5PSI5MCIgd2lkdGg9Ijc2IiBoZWlnaHQ9IjQyIiByeD0iMTQiIGZpbGw9IiM0ZjQ2NWYiLz4KICA8cmVjdCB4PSIyMzgiIHk9IjYyIiB3aWR0aD0iMzYiIGhlaWdodD0iNDAiIHJ4PSIxOCIgZmlsbD0iI2Q4YzZlYiIvPgogIDxyZWN0IHg9IjE4NCIgeT0iMTI4IiB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjI0OCIgcng9IjM0IiBmaWxsPSIjYmFhN2RlIi8+CiAgPHJlY3QgeD0iMjAyIiB5PSIyMTYiIHdpZHRoPSIxMDgiIGhlaWdodD0iODYiIHJ4PSIxOCIgZmlsbD0iI2ZmZmRmYiIgb3BhY2l0eT0iLjk1Ii8+CiAgPHJlY3QgeD0iMjAyIiB5PSIyMTYiIHdpZHRoPSIxMDgiIGhlaWdodD0iMTAiIHJ4PSI1IiBmaWxsPSIjZThkZWY3Ii8+CiAgPHRleHQgeD0iMjU2IiB5PSIyNDUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9IjgwMCIgZmlsbD0iIzZiNWE4ZSI+UkVUSU5BTDwvdGV4dD4KICA8dGV4dCB4PSIyNTYiIHk9IjI3MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjOWE4YWI3Ij52aXRhLWE8L3RleHQ+CjwvZz4KPC9zdmc+"}, {"name": "Anua Azelaic Acid 10 Hyaluron Redness Soothing Serum", "category": "Азелаиновая кислота", "desc": "Актив для красноты, неровного тона и визуальной аккуратности пор; наносится тонким слоем в отдельный вечер и закрывается Celimax Dual Barrier.", "img": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CjxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmZmZmYiLz4KICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y3ZjJmOCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJzaGluZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwLjk1KSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGlkPSJzaGFkb3ciIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiPgogICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjgiIHN0ZERldmlhdGlvbj0iMTAiIGZsb29kLWNvbG9yPSIjYjliZmQwIiBmbG9vZC1vcGFjaXR5PSIuMTYiLz4KICA8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcng9Ijg2IiBmaWxsPSJ1cmwoI2JnKSIvPgo8Y2lyY2xlIGN4PSI0MTAiIGN5PSI4OCIgcj0iNDQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii41NSIvPgo8Y2lyY2xlIGN4PSIxMDQiIGN5PSI0MDQiIHI9IjY2IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIuNDIiLz4KCjxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICA8ZWxsaXBzZSBjeD0iMjU2IiBjeT0iMzkwIiByeD0iODQiIHJ5PSIxNCIgZmlsbD0iI2Q1ZGNlNyIgb3BhY2l0eT0iLjQyIi8+CiAgPHJlY3QgeD0iMjE4IiB5PSI5MCIgd2lkdGg9Ijc2IiBoZWlnaHQ9IjQyIiByeD0iMTQiIGZpbGw9IiM0ZjQ2NWYiLz4KICA8cmVjdCB4PSIyMzgiIHk9IjYyIiB3aWR0aD0iMzYiIGhlaWdodD0iNDAiIHJ4PSIxOCIgZmlsbD0iI2Q4YzZlYiIvPgogIDxyZWN0IHg9IjE4NCIgeT0iMTI4IiB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjI0OCIgcng9IjM0IiBmaWxsPSIjOWRjYmIwIi8+CiAgPHJlY3QgeD0iMjAyIiB5PSIyMTYiIHdpZHRoPSIxMDgiIGhlaWdodD0iODYiIHJ4PSIxOCIgZmlsbD0iI2ZmZmRmYiIgb3BhY2l0eT0iLjk1Ii8+CiAgPHJlY3QgeD0iMjAyIiB5PSIyMTYiIHdpZHRoPSIxMDgiIGhlaWdodD0iMTAiIHJ4PSI1IiBmaWxsPSIjZThkZWY3Ii8+CiAgPHRleHQgeD0iMjU2IiB5PSIyNDUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9IjgwMCIgZmlsbD0iIzZiNWE4ZSI+QVpFTEFJQzwvdGV4dD4KICA8dGV4dCB4PSIyNTYiIHk9IjI3MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjOWE4YWI3Ij4xMCUgc2VydW08L3RleHQ+CjwvZz4KPC9zdmc+"}, {"name": "VT Cosmetics Reedle Shot Lifting Eye Cream", "category": "Крем для глаз", "desc": "Крем для зоны вокруг глаз с бакучиолом; наносите маленькое количество по орбитальной косточке, не близко к слизистой и подвижному веку.", "img": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CjxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmZmZmYiLz4KICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y3ZjJmOCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJzaGluZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwLjk1KSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGlkPSJzaGFkb3ciIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiPgogICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjgiIHN0ZERldmlhdGlvbj0iMTAiIGZsb29kLWNvbG9yPSIjYjliZmQwIiBmbG9vZC1vcGFjaXR5PSIuMTYiLz4KICA8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcng9Ijg2IiBmaWxsPSJ1cmwoI2JnKSIvPgo8Y2lyY2xlIGN4PSI0MTAiIGN5PSI4OCIgcj0iNDQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii41NSIvPgo8Y2lyY2xlIGN4PSIxMDQiIGN5PSI0MDQiIHI9IjY2IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIuNDIiLz4KCjxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICA8ZWxsaXBzZSBjeD0iMjU2IiBjeT0iMzkwIiByeD0iOTUiIHJ5PSIxNiIgZmlsbD0iI2Q1ZGNlNyIgb3BhY2l0eT0iLjQyIi8+CiAgPHBhdGggZD0iTTE3OCAxMjZoMTU2bC0xOCAyNThIMTk2bC0xOC0yNTh6IiBmaWxsPSIjZDZjOGI2Ii8+CiAgPHBhdGggZD0iTTE5MiAxMjZoMTI4bC0xMiA0NkgyMDRsLTEyLTQ2eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iLjQyIi8+CiAgPHJlY3QgeD0iMjE0IiB5PSIzODQiIHdpZHRoPSI4NCIgaGVpZ2h0PSIzNCIgcng9IjEwIiBmaWxsPSIjZjdmNWYxIi8+CiAgPHJlY3QgeD0iMjAwIiB5PSIxODUiIHdpZHRoPSIxMTIiIGhlaWdodD0iMTA4IiByeD0iMjIiIGZpbGw9IiNmZmZkZmIiIG9wYWNpdHk9Ii45NSIvPgogIDxyZWN0IHg9IjIwMCIgeT0iMTg1IiB3aWR0aD0iMTEyIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iI2VlZTZkYSIgb3BhY2l0eT0iLjc1Ii8+CiAgPHRleHQgeD0iMjU2IiB5PSIyMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzNCIgZm9udC13ZWlnaHQ9IjgwMCIgZmlsbD0iIzYyNzc4YyI+RVlFPC90ZXh0PgogIDx0ZXh0IHg9IjI1NiIgeT0iMjYyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiM4ZGEzYjciPmxpZnRpbmc8L3RleHQ+CjwvZz4KPC9zdmc+"}, {"name": "Arocell Collagen Peel-Off Mask", "category": "Маска", "desc": "Маска-плёнка для визуальной гладкости и свежести; лучше использовать 1 раз в 10–14 дней вместо RF и только если кожа спокойная.", "img": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CjxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmZmZmYiLz4KICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y3ZjJmOCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJzaGluZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwLjk1KSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGlkPSJzaGFkb3ciIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiPgogICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjgiIHN0ZERldmlhdGlvbj0iMTAiIGZsb29kLWNvbG9yPSIjYjliZmQwIiBmbG9vZC1vcGFjaXR5PSIuMTYiLz4KICA8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcng9Ijg2IiBmaWxsPSJ1cmwoI2JnKSIvPgo8Y2lyY2xlIGN4PSI0MTAiIGN5PSI4OCIgcj0iNDQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii41NSIvPgo8Y2lyY2xlIGN4PSIxMDQiIGN5PSI0MDQiIHI9IjY2IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIuNDIiLz4KCjxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICA8ZWxsaXBzZSBjeD0iMjU2IiBjeT0iMzkyIiByeD0iMTA4IiByeT0iMTYiIGZpbGw9IiNkNWRjZTciIG9wYWNpdHk9Ii40MiIvPgogIDxwYXRoIGQ9Ik0xNjIgMTMyaDE4OGwxOCAyNTRIMTQ0bDE4LTI1NHoiIGZpbGw9IiNlZmJmZDEiLz4KICA8cGF0aCBkPSJNMTYyIDEzMmgxODhsLTEyIDQwSDE3NGwtMTItNDB6IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIuMjgiLz4KICA8cmVjdCB4PSIxODIiIHk9IjIwOCIgd2lkdGg9IjE0OCIgaGVpZ2h0PSI5NiIgcng9IjIyIiBmaWxsPSIjZmZmZGZiIiBvcGFjaXR5PSIuOTUiLz4KICA8Y2lyY2xlIGN4PSIyMjgiIGN5PSIyNDYiIHI9IjE4IiBmaWxsPSJub25lIiBzdHJva2U9IiNlN2E5YzEiIHN0cm9rZS13aWR0aD0iNSIvPgogIDxjaXJjbGUgY3g9IjI4NCIgY3k9IjI0NiIgcj0iMTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2U3YTljMSIgc3Ryb2tlLXdpZHRoPSI1Ii8+CiAgPHBhdGggZD0iTTIyNSAyODJjMjAgMTUgNDIgMTUgNjIgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTdhOWMxIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDx0ZXh0IHg9IjI1NiIgeT0iMTg2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSI4MDAiIGZpbGw9IiNjYjdkYTIiPkFST0NFTEw8L3RleHQ+CiAgPHRleHQgeD0iMjU2IiB5PSIzMzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iI2NiN2RhMiI+Y29sbGFnZW4gbWFzazwvdGV4dD4KPC9nPgo8L3N2Zz4="}, {"name": "Laneige Lip Sleeping Mask EX Berry", "category": "Губы", "desc": "Ночная маска для губ, полезная на фоне ретиноидов и азелаиновой кислоты; можно наносить плотным слоем каждый вечер последним этапом.", "img": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CjxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmZmZmYiLz4KICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y3ZjJmOCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJzaGluZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwLjk1KSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGlkPSJzaGFkb3ciIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiPgogICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjgiIHN0ZERldmlhdGlvbj0iMTAiIGZsb29kLWNvbG9yPSIjYjliZmQwIiBmbG9vZC1vcGFjaXR5PSIuMTYiLz4KICA8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcng9Ijg2IiBmaWxsPSJ1cmwoI2JnKSIvPgo8Y2lyY2xlIGN4PSI0MTAiIGN5PSI4OCIgcj0iNDQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii41NSIvPgo8Y2lyY2xlIGN4PSIxMDQiIGN5PSI0MDQiIHI9IjY2IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIuNDIiLz4KCjxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICA8ZWxsaXBzZSBjeD0iMjU2IiBjeT0iMzc1IiByeD0iMTEwIiByeT0iMTgiIGZpbGw9IiNkNWRjZTciIG9wYWNpdHk9Ii40MiIvPgogIDxyZWN0IHg9IjE0NSIgeT0iMTUyIiB3aWR0aD0iMjIyIiBoZWlnaHQ9IjE2OCIgcng9IjQyIiBmaWxsPSIjZWU5ZmI2Ii8+CiAgPHJlY3QgeD0iMTY1IiB5PSIxMjAiIHdpZHRoPSIxODIiIGhlaWdodD0iNDYiIHJ4PSIxOCIgZmlsbD0iI2Q0NzQ5NiIvPgogIDxyZWN0IHg9IjE3NiIgeT0iMTk5IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjgyIiByeD0iMjIiIGZpbGw9IiNmZmZkZmIiIG9wYWNpdHk9Ii45NiIvPgogIDxyZWN0IHg9IjE3NiIgeT0iMTk5IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iI2VlOWZiNiIgb3BhY2l0eT0iLjE4Ii8+CiAgPHRleHQgeD0iMjU2IiB5PSIyNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyOCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzZhNjE3MyI+TElQIE1BU0s8L3RleHQ+CiAgPHRleHQgeD0iMjU2IiB5PSIyNjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iI2EwOGY4YSI+Y2FyZTwvdGV4dD4KPC9nPgo8L3N2Zz4="}, {"name": "Mesomatrix гель для микротоков", "category": "Аппаратный гель", "desc": "Проводящий гель для микротокового аппарата: наносится толстым слоем на чистую кожу и обязательно удаляется после процедуры перед тонером.", "img": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CjxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmZmZmYiLz4KICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y3ZjJmOCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJzaGluZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwLjk1KSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGlkPSJzaGFkb3ciIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiPgogICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjgiIHN0ZERldmlhdGlvbj0iMTAiIGZsb29kLWNvbG9yPSIjYjliZmQwIiBmbG9vZC1vcGFjaXR5PSIuMTYiLz4KICA8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcng9Ijg2IiBmaWxsPSJ1cmwoI2JnKSIvPgo8Y2lyY2xlIGN4PSI0MTAiIGN5PSI4OCIgcj0iNDQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii41NSIvPgo8Y2lyY2xlIGN4PSIxMDQiIGN5PSI0MDQiIHI9IjY2IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIuNDIiLz4KCjxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICA8ZWxsaXBzZSBjeD0iMjU2IiBjeT0iMzkyIiByeD0iOTAiIHJ5PSIxNSIgZmlsbD0iI2Q1ZGNlNyIgb3BhY2l0eT0iLjQyIi8+CiAgPHJlY3QgeD0iMjA4IiB5PSI5NiIgd2lkdGg9Ijk2IiBoZWlnaHQ9IjQ0IiByeD0iMTIiIGZpbGw9IiNlZmVjZWMiLz4KICA8cGF0aCBkPSJNMjU2IDk2VjcyaDg0IiBzdHJva2U9IiM5YzhhOTMiIHN0cm9rZS13aWR0aD0iMTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxyZWN0IHg9IjE4MiIgeT0iMTQwIiB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjIzNiIgcng9IjM0IiBmaWxsPSIjYThkNmVjIi8+CiAgPHJlY3QgeD0iMjAwIiB5PSIyMzAiIHdpZHRoPSIxMTIiIGhlaWdodD0iODYiIHJ4PSIxOCIgZmlsbD0iI2ZmZmRmYiIgb3BhY2l0eT0iLjk1Ii8+CiAgPHJlY3QgeD0iMjAwIiB5PSIyMzAiIHdpZHRoPSIxMTIiIGhlaWdodD0iMTAiIHJ4PSI1IiBmaWxsPSIjZGRlY2Y1Ii8+CiAgPHRleHQgeD0iMjU2IiB5PSIyNTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyOCIgZm9udC13ZWlnaHQ9IjgwMCIgZmlsbD0iIzY2OTJhOSI+R0VMPC90ZXh0PgogIDx0ZXh0IHg9IjI1NiIgeT0iMjgyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiM4Y2FlYzIiPm1pY3JvY3VycmVudDwvdGV4dD4KPC9nPgo8L3N2Zz4="}, {"name": "Mesomatrix гель для RF-лифтинга", "category": "Аппаратный гель", "desc": "Контактный гель для RF: должен лежать щедрым слоем, чтобы насадка скользила и не перегревала кожу; после процедуры гель смывается или снимается.", "img": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CjxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmZmZmYiLz4KICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y3ZjJmOCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJzaGluZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwLjk1KSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGlkPSJzaGFkb3ciIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiPgogICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjgiIHN0ZERldmlhdGlvbj0iMTAiIGZsb29kLWNvbG9yPSIjYjliZmQwIiBmbG9vZC1vcGFjaXR5PSIuMTYiLz4KICA8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcng9Ijg2IiBmaWxsPSJ1cmwoI2JnKSIvPgo8Y2lyY2xlIGN4PSI0MTAiIGN5PSI4OCIgcj0iNDQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii41NSIvPgo8Y2lyY2xlIGN4PSIxMDQiIGN5PSI0MDQiIHI9IjY2IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIuNDIiLz4KCjxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICA8ZWxsaXBzZSBjeD0iMjU2IiBjeT0iMzkyIiByeD0iOTAiIHJ5PSIxNSIgZmlsbD0iI2Q1ZGNlNyIgb3BhY2l0eT0iLjQyIi8+CiAgPHJlY3QgeD0iMjA4IiB5PSI5NiIgd2lkdGg9Ijk2IiBoZWlnaHQ9IjQ0IiByeD0iMTIiIGZpbGw9IiNlZmVjZWMiLz4KICA8cGF0aCBkPSJNMjU2IDk2VjcyaDg0IiBzdHJva2U9IiM5YzhhOTMiIHN0cm9rZS13aWR0aD0iMTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxyZWN0IHg9IjE4MiIgeT0iMTQwIiB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjIzNiIgcng9IjM0IiBmaWxsPSIjZjJjZmExIi8+CiAgPHJlY3QgeD0iMjAwIiB5PSIyMzAiIHdpZHRoPSIxMTIiIGhlaWdodD0iODYiIHJ4PSIxOCIgZmlsbD0iI2ZmZmRmYiIgb3BhY2l0eT0iLjk1Ii8+CiAgPHJlY3QgeD0iMjAwIiB5PSIyMzAiIHdpZHRoPSIxMTIiIGhlaWdodD0iMTAiIHJ4PSI1IiBmaWxsPSIjZGRlY2Y1Ii8+CiAgPHRleHQgeD0iMjU2IiB5PSIyNTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyOCIgZm9udC13ZWlnaHQ9IjgwMCIgZmlsbD0iIzY2OTJhOSI+UkY8L3RleHQ+CiAgPHRleHQgeD0iMjU2IiB5PSIyODIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzhjYWVjMiI+bGlmdGluZyBnZWw8L3RleHQ+CjwvZz4KPC9zdmc+"}, {"name": "Микротоковый аппарат", "category": "Аппарат", "desc": "Используется по массажным линиям 10–15 минут с проводящим гелем; не работайте по щитовидной железе, подвижному веку и раздражённым зонам.", "img": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CjxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmZmZmYiLz4KICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y3ZjJmOCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJzaGluZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwLjk1KSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGlkPSJzaGFkb3ciIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiPgogICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjgiIHN0ZERldmlhdGlvbj0iMTAiIGZsb29kLWNvbG9yPSIjYjliZmQwIiBmbG9vZC1vcGFjaXR5PSIuMTYiLz4KICA8L2ZpbHRlcj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcng9Ijg2IiBmaWxsPSJ1cmwoI2JnKSIvPgo8Y2lyY2xlIGN4PSI0MTAiIGN5PSI4OCIgcj0iNDQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9Ii41NSIvPgo8Y2lyY2xlIGN4PSIxMDQiIGN5PSI0MDQiIHI9IjY2IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIuNDIiLz4KCjxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICA8ZWxsaXBzZSBjeD0iMjU2IiBjeT0iMzkyIiByeD0iNzQiIHJ5PSIxNCIgZmlsbD0iI2Q1ZGNlNyIgb3BhY2l0eT0iLjQyIi8+CiAgPHBhdGggZD0iTTIzMiAxMDhoNDhjMTggMCAzMiAxNCAzMiAzMnYxNzZjMCAzNS0yNiA1Ni01NiA1NnMtNTYtMjEtNTYtNTZWMTQwYzAtMTggMTQtMzIgMzItMzJ6IiBmaWxsPSIjZDRkZmYwIi8+PGNpcmNsZSBjeD0iMjU2IiBjeT0iMTYwIiByPSIxNCIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iLjc0Ii8+PHJlY3QgeD0iMjI1IiB5PSIyMTQiIHdpZHRoPSI2MiIgaGVpZ2h0PSI5NCIgcng9IjE4IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIuNjYiLz48Y2lyY2xlIGN4PSIyNTYiIGN5PSIzMzAiIHI9IjciIGZpbGw9IiM5YmI4ZDMiIG9wYWNpdHk9Ii45Ii8+CiAgPHRleHQgeD0iMjU2IiB5PSI0MzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9IjgwMCIgZmlsbD0iIzZkNzc4NyI+TUlDUk88L3RleHQ+CiAgPHRleHQgeD0iMjU2IiB5PSI0NTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzk3YThiZCI+Y3VycmVudDwvdGV4dD4KPC9nPgo8L3N2Zz4="}];
const DONE_KEY='beauty_planner_done_v6';
const CELEBRATE_KEY='beauty_planner_celebrated_v1';
const DAY_NOTES_KEY='beauty_planner_day_notes_v1';
const WEEKDAYS=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
const MONTHS=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
let today=new Date(), selectedDate=new Date(today.getFullYear(),today.getMonth(),today.getDate()), currentMonth=new Date(today.getFullYear(),today.getMonth(),1), query="", lastSwipeDir='left';
let doneState=safeRead(DONE_KEY,{});
let celebratedState=safeRead(CELEBRATE_KEY,{});
let dayNotesState=safeRead(DAY_NOTES_KEY,{});

function safeRead(k,f){try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(f));}catch(e){return f;}}
function safeWrite(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
function pad(n){return String(n).padStart(2,'0');}
function iso(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());}
function addDays(d,n){let x=new Date(d);x.setDate(x.getDate()+n);return x;}
function dayName(d){return WEEKDAYS[d.getDay()];}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function taskId(block, task){return block+'||'+task;}

function tasksForDate(d) {
  const day=SCHEDULE[dayName(d)]||{};
  const out=[];
  Object.entries(day).forEach(([block,tasks])=>tasks.forEach(t=>out.push({block, name:t[0], method:t[1], id:taskId(block,t[0])})));
  return out;
}

function progressForDate(d){
  const tasks=tasksForDate(d), st=doneState[iso(d)]||{};
  const done=tasks.filter(t=>st[t.id]).length;
  return {done,total:tasks.length,pct:tasks.length?Math.round(done/tasks.length*100):0};
}


function renderChecklist(){
  const dayObj=SCHEDULE[dayName(selectedDate)]||{}, root=document.getElementById('checklistContent');
  updateTopDayInfo();
  let html='<article class="day-card single swipe-target" id="swipeDayCard"><header class="day-header"><h2>'+esc(dayName(selectedDate))+'</h2><p class="day-counter" id="selectedCounter">0/0</p></header>';
  Object.entries(dayObj).forEach(([block,tasks])=>{
    let rows='';
    const isDayBlock=/утро|день/i.test(block);
    const blockClass=isDayBlock ? 'block day-block' : 'block night-block';
    tasks.forEach(t=>{
      const id=taskId(block,t[0]), checked=!!((doneState[iso(selectedDate)]||{})[id]);
      rows += `<label class="task ${checked?'done-task':''}"><input class="check" type="checkbox" data-id="${esc(id)}" ${checked?'checked':''}><span class="box">✓</span><span class="task-text"><strong>${esc(t[0])}</strong><em>${esc(t[1])}</em></span></label>`;
    });
    if(rows) html += `<section class="${blockClass}"><h3>${esc(block)}</h3><div class="tasks">${rows}</div></section>`;
  });
  html += '</article>';
  root.innerHTML=html;

  root.querySelectorAll('.check').forEach(ch=>ch.addEventListener('change',()=>{
    const dateKey=iso(selectedDate);
    if(!doneState[dateKey]) doneState[dateKey]={};
    if(ch.checked) doneState[dateKey][ch.dataset.id]=true; else delete doneState[dateKey][ch.dataset.id];
    safeWrite(DONE_KEY,doneState);

    const taskEl=ch.closest('.task');
    if(taskEl) taskEl.classList.toggle('done-task', ch.checked);

    if(navigator.vibrate){
      try{ navigator.vibrate(ch.checked ? 14 : 8); }catch(e){}
    }

    updateProgress();
    renderCalendar();
  }));

  updateProgress();
  bindSwipe(document.getElementById('swipeDayCard'));
}

function renderCalendar(){
  const grid=document.getElementById('calendarGrid'), title=document.getElementById('calendarTitle');
  title.textContent=MONTHS[currentMonth.getMonth()]+' '+currentMonth.getFullYear();
  grid.innerHTML='';
  ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'].forEach(w=>{ const e=document.createElement('div'); e.className='wd'; e.textContent=w; grid.appendChild(e); });
  const first=new Date(currentMonth.getFullYear(),currentMonth.getMonth(),1), offset=(first.getDay()+6)%7, start=addDays(first,-offset);
  for(let i=0;i<42;i++){ const d=addDays(start,i), p=progressForDate(d), btn=document.createElement('button');
    btn.type='button'; btn.className='day-cell'; if(d.getMonth()!=currentMonth.getMonth()) btn.classList.add('out'); if(iso(d)==iso(today)) btn.classList.add('today'); if(iso(d)==iso(selectedDate)) btn.classList.add('selected');
    const moon=(p.total&&p.done===p.total)?`<span class="day-mark">☾</span>`:``;
    const noteMark = dayNotesState[iso(d)] ? `<span class="day-note-mark">✎</span>` : ``;
    btn.innerHTML=`<span class="day-num-wrap"><span class="day-num">${d.getDate()}</span><span class="day-icons">${noteMark}${moon}</span></span><span class="day-pct">${p.done}/${p.total} · ${p.pct}%</span><span class="mini-progress"><i style="width:${p.pct}%"></i></span>`;
    btn.onclick=()=>{ selectedDate=new Date(d); if(selectedDate.getMonth()!=currentMonth.getMonth()) currentMonth=new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1); updateCalendarNotePanel(selectedDate); renderCalendar(); };
    grid.appendChild(btn);
  }
  updateMonthStats();
  updateCalendarNotePanel(selectedDate);
}

function updateMonthStats(){
  const y=currentMonth.getFullYear(), m=currentMonth.getMonth(), days=new Date(y,m+1,0).getDate();
  let total=0, done=0, perfect=0, active=0;
  for(let i=1;i<=days;i++){ const p=progressForDate(new Date(y,m,i)); total+=p.total; done+=p.done; if(p.done>0) active++; if(p.total&&p.done===p.total) perfect++; }
  document.getElementById('monthDone').textContent=`${done}/${total}`;
  document.getElementById('monthPct').textContent=(total?Math.round(done/total*100):0)+'%';
  document.getElementById('monthPerfect').textContent=perfect;
  document.getElementById('monthActiveDays').textContent=active;
}

function updateProgress(){
  const offset=(selectedDate.getDay()+6)%7; let total=0, done=0;
  for(let i=0;i<7;i++){ const p=progressForDate(addDays(selectedDate,-offset+i)); total+=p.total; done+=p.done; }
  const pct=total?Math.round(done/total*100):0;
  const dp=progressForDate(selectedDate);
  const dPct=dp.total?Math.round(dp.done/dp.total*100):0;

  const dText=document.getElementById('dayProgressText'); if(dText) dText.textContent=`${dp.done} из ${dp.total}`;
  const dPctText=document.getElementById('dayProgressPct'); if(dPctText) dPctText.textContent=dPct+'%';
  const dBar=document.getElementById('dayProgressBar'); if(dBar) dBar.style.width=dPct+'%';

  const wText=document.getElementById('weekProgressText'); if(wText) wText.textContent=`${done} из ${total}`;
  const wPctText=document.getElementById('weekProgressPct'); if(wPctText) wPctText.textContent=pct+'%';
  const wBar=document.getElementById('weekProgressBar'); if(wBar) wBar.style.width=pct+'%';

  const c=document.getElementById('selectedCounter'); if(c) c.textContent=`${dp.done}/${dp.total}${(dp.total && dp.done===dp.total)?' · ☾':''}`;
  maybeCelebrateSelectedDay();
}



function bindProductToggles(){ document.querySelectorAll('.product-btn').forEach(btn=>btn.onclick=()=>btn.closest('.product-item').classList.toggle('open')); }

function setView(v){ document.querySelectorAll('[data-view]').forEach(el=>el.classList.toggle('active',el.dataset.view===v)); document.querySelectorAll('[data-tab]').forEach(el=>el.classList.toggle('active',el.dataset.tab===v)); if(v==='calendar') renderCalendar(); }


function showDayCelebration(){
  const ov=document.getElementById('dayCelebration'); showSwipeSparkles('left');
  if(!ov) return;
  ov.classList.remove('show');
  void ov.offsetWidth;
  ov.classList.add('show');
  window.clearTimeout(showDayCelebration._t);
  showDayCelebration._t=window.setTimeout(()=>ov.classList.remove('show'),2050);
}
function maybeCelebrateSelectedDay(){
  const p=progressForDate(selectedDate);
  const key=iso(selectedDate);
  if(p.total && p.done===p.total && !celebratedState[key]){
    celebratedState[key]=true;
    safeWrite(CELEBRATE_KEY,celebratedState);
    if(navigator.vibrate){
      try{ navigator.vibrate([18,40,24,50,28]); }catch(e){}
    }
    showDayCelebration();
  }
}


function updateTopDayInfo(){
  const topDate=document.getElementById('topSelectedDate');
  if(topDate){
    const isToday = iso(selectedDate)===iso(today);
    const label = selectedDate.toLocaleDateString('ru-RU',{weekday:'long', day:'numeric', month:'long'});
    topDate.textContent = isToday ? 'Сегодня · ' + label : label;
  }
  const notesDate=document.getElementById('dayNotesDate');
  if(notesDate){
    notesDate.textContent = selectedDate.toLocaleDateString('ru-RU',{weekday:'long', day:'numeric', month:'long', year:'numeric'});
  }
}
function animateChecklistSwipe(dir){
  lastSwipeDir = dir || 'left';
  const el=document.getElementById('checklistContent');
  if(!el) return;
  el.classList.remove('swipe-left','swipe-right');
  void el.offsetWidth;
  el.classList.add(dir==='right' ? 'swipe-right' : 'swipe-left');
  showSwipeSparkles(dir);
}
function showSwipeSparkles(dir){
  const el=document.getElementById('swipeSparkles');
  if(!el) return;
  el.className='swipe-sparkles show ' + (dir==='right'?'from-left':'from-right');
  el.innerHTML='';
  const chars=['✦','✧','☆','★'];
  for(let i=0;i<10;i++){
    const s=document.createElement('span');
    s.textContent=chars[i%chars.length];
    s.style.left=(8 + Math.random()*84)+'%';
    s.style.top=(18 + Math.random()*56)+'%';
    s.style.animationDelay=(i*0.05)+'s';
    s.style.fontSize=(12+Math.random()*12)+'px';
    el.appendChild(s);
  }
  window.clearTimeout(showSwipeSparkles._t);
  showSwipeSparkles._t=window.setTimeout(()=>{ el.className='swipe-sparkles'; el.innerHTML=''; }, 900);
}
function setSelectedDay(delta, dir){
  selectedDate=addDays(selectedDate, delta);
  if(selectedDate.getMonth()!=currentMonth.getMonth()) currentMonth=new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1);
  renderChecklist();
  renderCalendar();
  animateChecklistSwipe(dir || (delta>0?'left':'right'));
}
function bindSwipe(el){
  if(!el || el.dataset.swipeBound==='1') return;
  el.dataset.swipeBound='1';
  let sx=0, sy=0, dx=0, dy=0, tracking=false, horizontal=false, thresholdBuzz=false;

  const resetVisual=()=>{
    el.style.transition='transform .24s cubic-bezier(.22,.8,.22,1), opacity .24s ease, filter .24s ease';
    el.style.transform='';
    el.style.opacity='';
    el.style.filter='';
    el.classList.remove('is-swiping');
  };

  const start=(x,y)=>{
    sx=x; sy=y; dx=0; dy=0; tracking=true; horizontal=false; thresholdBuzz=false;
    el.style.transition='none';
  };

  const move=(x,y,ev)=>{
    if(!tracking) return;
    dx=x-sx; dy=y-sy;
    if(!horizontal && Math.abs(dx)>10 && Math.abs(dx)>Math.abs(dy)*1.05) horizontal=true;
    if(!horizontal) return;
    if(ev && ev.cancelable) ev.preventDefault();

    const damped = Math.sign(dx) * Math.min(Math.abs(dx)*0.42, 92);
    const progress = Math.min(Math.abs(dx)/150, 1);
    const opacity = 1 - progress*0.46;
    const blur = progress*1.2;
    const rotate = damped/46;

    el.classList.add('is-swiping');
    el.style.transform=`translateX(${damped}px) rotate(${rotate}deg) scale(${1-progress*0.018})`;
    el.style.opacity=String(opacity);
    el.style.filter=`blur(${blur}px)`;

    if(progress>.55 && !thresholdBuzz){
      thresholdBuzz=true;
      if(navigator.vibrate){ try{ navigator.vibrate(9); }catch(e){} }
    }
  };

  const end=(x,y)=>{
    if(!tracking){ resetVisual(); return; }
    dx=x-sx; dy=y-sy;
    tracking=false;
    if(horizontal && Math.abs(dx)>78 && Math.abs(dx)>Math.abs(dy)*1.15){
      const dir = dx<0 ? 'left' : 'right';
      const out = dx<0 ? -130 : 130;
      el.style.transition='transform .20s cubic-bezier(.22,.8,.22,1), opacity .20s ease, filter .20s ease';
      el.style.transform=`translateX(${out}px) rotate(${out/46}deg) scale(.982)`;
      el.style.opacity='0';
      el.style.filter='blur(2px)';
      if(navigator.vibrate){ try{ navigator.vibrate([10,22,10]); }catch(e){} }
      window.setTimeout(()=>setSelectedDay(dx<0 ? 1 : -1, dir), 170);
    }else{
      resetVisual();
    }
  };

  el.addEventListener('touchstart',e=>{
    const t=e.changedTouches[0];
    start(t.clientX,t.clientY);
  }, {passive:true});
  el.addEventListener('touchmove',e=>{
    const t=e.changedTouches[0];
    move(t.clientX,t.clientY,e);
  }, {passive:false});
  el.addEventListener('touchend',e=>{
    const t=e.changedTouches[0];
    end(t.clientX,t.clientY);
  }, {passive:true});
  el.addEventListener('touchcancel',()=>{ tracking=false; resetVisual(); }, {passive:true});

  let mouseDown=false;
  el.addEventListener('mousedown',e=>{ mouseDown=true; start(e.clientX,e.clientY); });
  window.addEventListener('mousemove',e=>{ if(mouseDown) move(e.clientX,e.clientY,e); });
  window.addEventListener('mouseup',e=>{ if(mouseDown){ mouseDown=false; end(e.clientX,e.clientY); }});
}
function animateCalendarShift(dir){
  const grid=document.getElementById('calendarGrid');
  if(!grid) return;
  grid.classList.remove('calendar-slide-left','calendar-slide-right');
  void grid.offsetWidth;
  grid.classList.add(dir==='right' ? 'calendar-slide-right' : 'calendar-slide-left');
  showSwipeSparkles(dir);
}


function openDayNotes(){
  const modal=document.getElementById('dayNotesModal');
  const area=document.getElementById('dayNotesTextarea');
  if(!modal || !area) return;
  const key=iso(selectedDate);
  updateTopDayInfo();
  area.value=dayNotesState[key]||'';
  modal.classList.add('show');
  setTimeout(()=>area.focus(), 40);
}
function closeDayNotes(){
  const modal=document.getElementById('dayNotesModal');
  if(modal) modal.classList.remove('show');
}
function saveDayNotes(){
  const area=document.getElementById('dayNotesTextarea');
  if(!area) return;
  const key=iso(selectedDate);
  const value=(area.value||'').trim();
  if(value) dayNotesState[key]=value;
  else delete dayNotesState[key];
  safeWrite(DAY_NOTES_KEY, dayNotesState);
  updateCalendarNotePanel(selectedDate);
  renderCalendar();
  updateCalendarNotePanel(selectedDate);
  if(navigator.vibrate){
    try{ navigator.vibrate(10); }catch(e){}
  }
  closeDayNotes();
  updateCalendarNotePanel(selectedDate);
  renderCalendar();
}
function clearDayNotes(){
  const area=document.getElementById('dayNotesTextarea');
  if(area) area.value='';
  const key=iso(selectedDate);
  delete dayNotesState[key];
  safeWrite(DAY_NOTES_KEY, dayNotesState);
}



function updateCalendarNotePanel(dateObj){
  const date = dateObj || selectedDate;
  const dateLabel = date.toLocaleDateString('ru-RU',{weekday:'long', day:'numeric', month:'long', year:'numeric'});
  const body = document.getElementById('calendarNoteBody');
  const head = document.getElementById('calendarNoteDate');
  const btn = document.getElementById('calendarOpenDayNote');
  if(head) head.textContent = dateLabel;
  const key = iso(date);
  const note = dayNotesState[key];
  if(body){
    body.textContent = note ? note : 'Для этого дня пока нет заметки.';
    body.classList.toggle('empty', !note);
  }
  if(btn){
    btn.dataset.date = key;
  }
}

function init(){
  document.querySelectorAll('[data-tab]').forEach(btn=>btn.addEventListener('click',()=>setView(btn.dataset.tab)));

  const todayTop=document.getElementById('todayBtnTop');
  if(todayTop) todayTop.onclick=()=>{
    selectedDate=new Date(today.getFullYear(),today.getMonth(),today.getDate());
    currentMonth=new Date(today.getFullYear(),today.getMonth(),1);
    setView('checklist');
    renderChecklist();
    renderCalendar();
    animateChecklistSwipe('right');
  };

  document.getElementById('prevMonth').onclick=()=>{
    currentMonth=new Date(currentMonth.getFullYear(),currentMonth.getMonth()-1,1);
    renderCalendar();
    animateCalendarShift('right');
  };
  document.getElementById('nextMonth').onclick=()=>{
    currentMonth=new Date(currentMonth.getFullYear(),currentMonth.getMonth()+1,1);
    renderCalendar();
    animateCalendarShift('left');
  };


  const resetDayBtn=document.getElementById('resetDayBottom');
  if(resetDayBtn) resetDayBtn.onclick=()=>{
    if(confirm('Сбросить отметки выбранного дня?')){
      delete doneState[iso(selectedDate)];
      delete celebratedState[iso(selectedDate)];
      safeWrite(DONE_KEY,doneState);
      safeWrite(CELEBRATE_KEY,celebratedState);
      renderChecklist();
      renderCalendar();
      if(navigator.vibrate){ try{ navigator.vibrate(12); }catch(e){} }
    }
  };

  const notesBtn=document.getElementById('dayNotesBtn');
  if(notesBtn) notesBtn.onclick=openDayNotes;

  const closeBtn=document.getElementById('closeDayNotes');
  if(closeBtn) closeBtn.onclick=closeDayNotes;
  const saveBtn=document.getElementById('saveDayNotes');
  if(saveBtn) saveBtn.onclick=saveDayNotes;
  const clearBtn=document.getElementById('clearDayNotes');
  if(clearBtn) clearBtn.onclick=clearDayNotes;

  document.querySelectorAll('[data-close-notes="1"]').forEach(el=>el.onclick=closeDayNotes);

  bindProductToggles();
  renderChecklist();
  renderCalendar();
  bindSwipe(document.getElementById('topDayStrip'));
}

document.addEventListener('DOMContentLoaded', init);
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js?v13-clean-final').then(reg=>reg.update()).catch(()=>{}));
