

const sportsInfo = [
    {
    _id: 0,
    name: 'WARM UP',
    text: `Stick to warm-up exercises for five to 10 minutes before moving on to cardio. For all standing exercises, the water level should be about chest height to provide the resistance that makes these moves beneficial.`,
    },
    {
    _id: 1,
    name: 'SQUAT',
    text: `Warms up legs and hips. Stand with feet in a wide stance, keeping the knees and torso aligned straight over the toes. Bend your knees and lower your torso into the water, toward a seating position, as low as comfort allows.`,
    },
    {
    _id: 2,
    name: 'KNEE UP',
    text: `Warms up core, arms and hips. Stand with feet slightly wider than hip 426 apart. Bring your right knee up toward the chest, slightly to the side to make room for your belly. As you do this, work the arms as well, by swooshing them from side to side in the water. Switch legs and repeat.`,
    },
    {
    _id: 3,
    name: 'BACK LEG CURL',
    text: `Warms up core, arms and hips. Stand with feet slightly wider than hip 426 apart and arms straight out in front of you in the water, with palms facing down. Draw the right heel up toward your buttocks. As the foot draws back, scoop the water backward with your hands at the same time, in a rowing motion. Switch feet and repeat.`,
    },
    {
    _id: 4,
    name: 'SWIMMING',
    text: `A great cardio workout for maintaining muscle strength without impact/loading on joints
    If you were a regular swimmer before you became pregnant, you should be able to continue with your usual routine. Even if you've never exercised before, swimming is safe to take up during pregnancy. Swimming in a chlorinated pool is not harmful to you or your baby. It's usually safe for you to swim throughout your pregnancy, right up until your baby's birth, although you shouldn’t swim after your waters have broken.
    
    Whether or not you are a seasoned swimmer, you should start slowly and gradually work up to sessions of up to 30 minutes long. Make sure you warm up and cool down gradually, and don't over-exert yourself. You should come out of the pool feeling that you could do more.
    
    Choose a stroke that you enjoy and feels comfortable. Alternating between swimming on your front, and floating on your back, while gently kicking your legs, will give you a good all-round workout. Take care not to arch your back.
    `,
    },
    {
    _id: 5,
    name: 'FLUTTER KICK',
    text: `Raises heart rate and activates core strength. Rest your chest and arms on a flutter board or pool noodle, and flutter-kick toward the deep end. Once you get there, without using your arms, flip your body over so you’re floating on your back, and flutter-kick back to the shallow end (in this position, hold the flutter board on top of your chest). To kick it up a notch, stop at the pool edge in the deep end and hang onto the side of the pool. Kick as hard as you can for a minute, then slow down, and repeat.`,
    },
    {
    _id: 6,
    name: 'TREADING WATER',
    text: `Raises heart rate and increases stamina. Tread water in the deep end, using only your legs (if you need a little support, ride a pool noodle like a horse). Hold a water weight in each hand, and switch between holding the left and the right hand up in the air. To make your upper body do the work, get rid of the weights and tread water normally. Make one leg go limp so you’re only treading with your hands and one leg. Switch to the other leg, and try to see how long you can tread water without using your legs at all. For a more complete arm workout, try moving your arms in both clockwise and counterclockwise motions.`,
    },
    {
    _id: 7,
    name: 'EXPERT TIP',
    text: `Want to lengthen the cardio portion of your workout with some laps? The breaststroke is the easiest option during pregnancy because it strengthens your back and doesn’t involve twisting from side to side like the front crawl. “However, the arm motion of the front crawl is great because it opens up your chest and back, and improves posture,” says Del Sorbo. She suggests reaping the benefits of the front crawl by walking in the pool and doing the arm motions through water.

    Swimming can be done in all of the stages of the pregnancy, however there are a few cautions that have to be taken into consideration.
    `,
    },
    {
    _id: 8,
    name: 'CAUTIONS',
    text: `Regardless of your workouts, you’ll need about 300 extra calories per day to fuel your 
    pregnancy in your second trimester, 500 in the third trimester of pregnancy.
    
    Spending more than 10 minutes in a hot tub can raise your body temperature above 101 F (38.3 C). This can increase the risk for neural tube defects, miscarriage and brain and spinal cord abnormalities — especially if your body temperature gets that high during the first four to six weeks of pregnancy. (This, of course, doesn’t mean your warm bath is unsafe — still water doesn’t hold high temperatures for quite as long, so you won’t have to worry about overheating in your own tub. Just keep your bath water warm rather than scalding hot to be safe.)
    
    Remember, a baby belly can throw off your center of gravity. So be extra cautious when walking on slippery surfaces, including on the pool deck and in the locker room.
    
    Don’t hold your breath for too long. Your baby needs oxygen, so be sure to keep your breathing steady and continuous while you’re swimming
    
    Check for water safety. Research the body of water you wish to swim in to prevent water-borne illness. While for the most part a public beach is perfectly fine, you may want to be more cautious with smaller bodies of water. Your best bet to avoid contamination: Stick with workouts in properly-chlorinated pools.`,
    },
    {
    _id: 9,
    name: `COBELOR'S POSE`,
    text: `This sitting pose helps open the pelvis. If you're very loose-jointed in your hips, make sure your "sit bones" are well grounded on your mat or blanket. Place pillows or rolled-up towels under your knees to avoid hyperextending your hips.
    Sit up straight against a wall with the soles of your feet touching each other.
    Gently press your knees down and away from each other, but don't force them apart.
    Stay in this position for as long as you're comfortable.
    `,
    },
    {
    _id: 10,
    name: 'PELVIC TILT',
    text: `This position helps relieve back pain, a common problem during pregnancy.
    Get on your hands and knees, with your arms shoulder-width apart and your knees hip-width apart. Keep your arms straight, but don't lock your elbows.
    Tuck your buttocks under and round your back as you breathe in.
    Relax your back into a neutral position as you breathe out.
    `,
    },
    {
    _id: 11,
    name: 'SQUATTING',
    text: `Denise recommends doing a squat pose every day to relax and open the pelvis and strengthen the upper legs. As you start to feel heavier in pregnancy, rest your bottom on props such as yoga blocks or a few stacked books. Focus on relaxing and letting your breath drop deeply into your belly.
    Stand facing the back of a chair with your feet slightly wider than hip-width apart, toes pointed outward. Hold the back of the chair for support.
    Contract your abdominal muscles, lift your chest, and relax your shoulders. Then lower your tailbone toward the floor as though you were going to sit down on a chair. Find your balance – most of your weight should be toward your heels.
    Hold the position for as long as it's comfortable.
    Take a deep breath and, exhaling, push into your legs to rise to a standing position.
    `,
    },
    {
    _id: 12,
    name: 'SIDE-LYING',
    text: `This is a good resting pose for the end of a practice.
    Lie on your left or right side with your head resting on your arm or a blanket.
    Put a body pillow or blanket roll between your thighs to give your hips some support.
    If you're in a yoga class, your instructor may guide you through some breathing exercises.
    `,
    },  
    {
    _id: 13,
    name: 'WALKING',
    text: `Walking is by far the most popular low-impact exercise. It works the cardiovascular system and burns calories. To get your heart rate up, walk faster than a stroll. Picking up the pace can increase the intensity of your workouts.`,
    },        
    {
    _id: 14,
    name: 'CYCLING',
    text: `A stationary bike is best, especially in later stages when your balance changes. Be careful with continued pressure on your pelvic, which can create pelvic girdle pain.`,
    },    
    {
    _id: 15,
    name: 'CONTRADICTIONS',
    text: `Poorly controlled type 1 diabetes, hyperthyroidism, seizure disorder, hypertension
    Extreme underweight (BMI<12)
    Chronic bronchitis
    Severe anemia
    Morbid obesity
    Orthopaedic limitations
    Hemodynamically significant heart disease  
    Restrictive lung disease  
    Incompetent cervix  
    Multiple gestation at risk for premature labor  
    Persistent vaginal bleeding  
    Placenta previa after 26 weeks  
    Premature labor during the current pregnancy  
    Ruptured membranes  
    Preeclampsia/pregnancy-induced hypertension
    `,
    },    
    {
    _id: 16,
    name: 'BASIC ROUTINE',
    text: `For resistance training, a 3-day-a-week routine can be employed with excellent success. Training should be performed on nonconsecutive days to allow for sufficient neuromuscular recuperation. Beginners should perform 1 set per exercise, whereas intermediate and advanced trainees can realize further benefits from 2 to 3 sets. Rest between sets should last approximately 2 minutes, allowing enough time for recovery of maternal heart rate. To optimize functional ability, a multi angled approach should be taken, where exercises are varied in all 3 planes of movement. All modalities of resistance training can be employed, including free weights, machines, cables, bands, and body weight movements. Given that joints are significantly more lax during pregnancy, a higher repetition range is recommended using an intensity of less than 70% 1RM (10 repetitions or more per set). Sets should be challenging but should not progress to the point of absolute muscular fatigue. Similarly, static exercises should be held until the muscles are challenged but not to the point where the woman can no longer maintain the support of her bodyweight. The Valsalva maneuver should be avoided at all costs because breath holding increases both heart rate and blood pressure and can decrease splanchnic blood flow and uterine perfusion, which can potentially be dangerous to the fetus. Expectant mothers should be instructed to breathe out on the concentric portion of each dynamic movement and inhale on the eccentric action; during static exercises, breathing should be regimented throughout the duration of exercise. Repetition speed should be slow to moderate, taking approximately 2 seconds on the concentric action and 3 seconds on the eccentric action. Given that motionless standing tends to cause pooling of venous blood and can decrease cardiac output, it is best to stay active between sets. This can be accomplished by walking around the room or performing light dynamic stretching movements. Prenatal exercise should always begin with a light warm-up and end with a brief cooldown. Generally, 5–10 minutes of light cardiovascular activity is generally sufficient for both the components. It is best to exercise after meals to avoid hypoglycemia. Most importantly, it is essential to be aware of the warning signs to stop exercise should adverse symptoms arise:
    Warning signs to terminate exercise session:
    Vaginal bleeding  
    Dyspnea before exertion  
    Dizziness  
    Headache  
    Chest pain  
    Muscle weakness  
    Calf pain or swelling (r/o thrombophlebitis)  
    Preterm labor  
    Decreased fetal movement  
    Amniotic fluid leakage
    `,
    },     
    {
    _id: 17,
    name: 'PLANK',
    text: `Lie on your stomach with your palms on the floor, feet together, and spine in a neutral position. Lift your body up on your forearms and toes, keeping your body as straight as possible. Maintain this position for as long as possible and challenge yourself to maintain longer periods in the plank position. `,
    },  
    {
    _id: 18,
    name: 'BIRD DOG',
    text: `Assume an all-fours position, chin up, spine in a neutral position. Simultaneously extend your right leg and left arm, so they are parallel to the floor. Hold this position for as long as possible and then repeat with the opposite arm and leg. `,
    },  

    {
    _id: 19,
    name: 'SIDE BRIDGE',
    text: ` Lie on your right side, legs straight, right palm on the floor, feet stacked one on top of the other. Straighten your right arm, keeping it in line with shoulder, and place your free hand on your opposite shoulder. Hold this position for as long as possible and then repeat on the opposite side.`,
    },      {
    _id: 20,
    name: 'KETTLEBELL',
    text: `1.If you have never used kettlebells before, pregnancy is absolutely not the time to start
    2.start with the lightest kettlebell you can find (usually 6 or 8 kg)
    3.Stand up straight with your feet hip width apart. 
    4.Hold the kettlebell with both hands at chest height. Elbows should be in by the rib cage, not lifted up to the sides.
    5.Hinge the hips back and bend the knees to squat down like you are sitting in a chair that's slightly behind you. 
    6.Squeeze the butt to return to standing
    7.Do 1-3 sets of 12 repetitions at as slow, controlled tempo possible.
    8.Don’t hesitate to halt training at the slightest hint of pain.
    `,
    },  
    {
    _id: 21,
    name: 'BASKETBALL',
    text: `If you are already active, healthy and have an uncomplicated pregnancy, you can continue to play sports unless it is one that should be avoided during pregnancy. It's important for you to stay comfortable and to warm up before and cool down after your sport.`,
    },  
    {
    _id: 22,
    name: 'KICKBOXING',
    text: `Exercising during pregnancy is a great idea — it helps to keep you and baby healthy and it may even make labor easier for you. But (sorry) kickboxing really is not the best option right now. In fact, you shouldn't do any form of exercise with the possibility of contact injury.`,
    },  
    {
    _id: 23,
    name: 'CLIMBING',
    text: `Even if you are experienced in the sport you want to perform, during pregnancy the change in hormonal balance may be dangerous for high focus requiring activities. `,
    },  
    {
    _id: 24,
    name: 'SOCCER',
    text: `When you're pregnant, you should stay away from soccer and any other contact sports. Getting tackled can be dangerous for you and your baby.`,
    },  
    {
    _id: 25,
    name: 'OTHER',
    text: `Exercises that involve lying down on your back, particularly after 16 weeks
    Any sports that involve a high risk of falling. Pregnancy changes your centre of gravity, and that affects your balance. Avoid exercises that involve a high risk of falling. That includes any sports that involve a lot of changes in direction, such as badminton and tennis
    
    Too intense exercises! For example, you may spend 15 minutes jogging on a treadmill, with some short, intense sprints. Afterwards, if you find that your blood glucose levels are too high, this is likely to be because the sprints are too intense. To prevent high blood glucose levels, you could try cutting out the sprints, and increasing the duration of your jogging to 30 minute
    
    `,
    },  

]

export default sportsInfo
