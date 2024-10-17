---
layout: ../../layouts/PostLayout.astro
title: "Book Notes: The Lean Product Playbook"
date: 2024-10-14
description: Book notes of The Lean Product Playbook
---


# Book Notes: The Lean Product Playbook

| Title  | The Lean Product Playbook |
| ------ | ------------------------- |
| Genres | Product                   |
| Author | Dan Olsen                 |
| ISBN   | TBA                       |

## Chapter 1. Achieving Product-Market Fit with the Lean Product Process

### What is Product-Market Fit

- Product-market fit means being in a good market with a product that can satisfy that market.
- a product that creates significant customer value

![Product-Market Fit](/images/bn-lean-product-playbook/Screen_Shot_2021-01-02_at_15.06.51.png)

### Steps to Build

1. Determine your target customers
2. Identify underserved customer needs
3. Define your value proposition
4. Specify your minimum viable product (MVP) feature set
5. Create your MVP prototype
6. Test your MVP with customers

## Chapter 2. Problem Space vs. Solution Space

![Problem-Solution Space](/images/bn-lean-product-playbook/Screen_Shot_2021-01-02_at_15.09.29.png)

- Solution space includes any product or representation of a product that is used by or intended for use by a customer.
- Problem space is where all the customer needs that you’d like your product to deliver live.
- Customers are much better at giving you feedback in the solution space.

## Chapter 4. Identify Underserved Customer Needs

> ⛳ Understand what's important to customer needs

### Customer Discover Interviews

- They help you to see if the way you’re describing the benefit is clear to users

### **Customer Benefit Ladders**

- Ask more questions to climb up a ladder of related benefits
- It's similar to the Five Why, which help you to explore the root cause of  a proble

### **Hierarchies of Needs**

- Similar to Maslow's hierarchy of human need, customer needs can have hierarchies also
- E.g. Customer benefit B doesn't matter if benefit A (a lower level on needs) hasn't yet been met

### **Importance vs. Satisfaction Framework**

![Framework](/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_14.34.27.png)

- Importance is a measure of how important a particular customer need is to a customer.
- Satisfaction is a measure of how satisfied a customer is with a particular solution that provides a certain customer benefit. It indicates how well that solution meets their needs.
- Competitive quadrant: a feature that is performing well. It is addressing a high importance need and customers are very satisfied with it.
- Opportunity quadrant: high importance of need but low satisfaction Customer needs are important but underserved. They offer excellent opportunities to create customer value.
- Example of Uber: pay taxi diver before (important but low satisfaction) to digital pay (important and high satisfaction) give them the chance to be compete in the business.

### Measuring Importance and Satisfaction

- Ask customers or prospective customers
- Comparing satisfaction ratings with competitive products is a good way to identify where your product is perceived as better or worse
- Measure satisfaction using a bipolar scale; since people can be satisfied or dissatisfied, a negative score makes sense
- Measure importance using a unipolar scale, since it is just a matter of degree without any negative value

### **Disruptive Innovation vs. Incremental Innovation**

- Increment innovation: make minor improvements that add small amounts of customer value with each new version of your product.
- Disruptive innovation: people can’t imagine going back to the old way (iPhone vs. Nokia)
- A disruptive innovation can come along and push all of those leading products to the left by offering a higher level of satisfaction that wasn’t available before.

### Gap Analysis

- Purpose: quantify the size of different product opportunities to inform your prioritization
- Gap = Importance - Satisfaction
- The bigger the gap, the more underserved the need.
- Its biggest shortcoming is that it treats all gaps of equal size the same. (Importance 10, Satisfaction 5 has the same gap as Importance 6, Satisfaction 1)

### Jobs to Be Done

- Purpose: quantify the size of different product opportunities to inform your prioritization
- Opportunity Score = Importance + Max[Importance - Satisfaction, 0]
- Scores greater than 15 to be very attractive, and those below 10 to be unattractive
- This frameworks illustrates customers "desired outcomes" for the "job to be done"

### Customer Value Delivered

- Customer Value Delivered = Importance × Satisfaction
- Opportunity to Add Value = Importance × (1 − Satisfaction)
- Opportunity = Importance − Current Value Delivered
- Customer Value Created = Importance × (Sat_after − Sat_before)
- When you are evaluating opportunities to pursue, you should pursue the ones with the highest opportunity scores.
- In addition to increasing satisfaction, another way to create more customer value with your product is to improve it so that it addresses additional, related customer needs

### The Kano Model

![/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_15.25.11.png](/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_15.25.11.png)

- Performance needs: more is better. As the need is more fully met, the resulting customer satisfaction increases.
- Must-have needs: don’t create satisfaction by being met. Instead, the need not being met causes customer dissatisfaction
- Delighter provide unexpected benefits that exceed customer expectations, resulting in very high customer satisfaction. The absence of a delighter doesn’t cause any dissatisfaction because customers aren’t expecting it.
- **Needs migrate over time.**
- Kano model exhibits hierarchy: You have to meet basic needs before you can get credit for performance features. And your product must be competitive on performance features before delighter matter.

## Chapter 5. Define Your Value Proposition


> ⛳ Decide which customers need the product will address.
> A good product is designed with focus on the set of needs that are important and that make sense to address together.

### **Product Value Proposition**

- Identifies the specific customer needs your product will address and articulates how it is better and different than the alternatives.
- Must haves are not the core part of value proposition, since all other products have to have them.
- Core elements are the performance benefits on which you choose to compete and the unique delighters you plan to provide.

![Example of Completed Product Value Proposition Template](/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_18.31.28.png)

Example of Completed Product Value Proposition Template

![Example of PVP with Expected Future States](/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_18.35.57.png)

Example of PVP with Expected Future States

## Chapter 6. Specify Your Minimum Viable Product Feature Set

- **Divergent thinking:** trying to generate as many ideas as possible without any judgment or evaluation.
- **Convergent thinking:** evaluate the ideas and decide which ones you think are the most promising.

### **Generate Ideas**

- Capture all the ideas that your team generated
- Organize them by the benefit that they deliver
- Review and prioritize the list of feature ideas

### Visualizing ROI

![/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_18.51.25.png](/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_18.51.25.png)

- Prioritize high ROI than lower  (A>B)
- Prioritize the smaller scope idea higher (C>D)
- Don't expect accurate calculation from developer, these estimations are to compare with each other and help PM to break down the user story

### Approximating ROI

Score each feature idea high, medium, or low on customer value and on effort.

![/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_19.00.58.png](/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_19.00.58.png)

### Deciding on your MVP candidate

Align with product value proposition and choose the highest priority features. 

![/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_19.07.36.png](/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_19.07.36.png)

![/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_19.08.32.png](/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_19.08.32.png)

## Chapter 7. Create Your MVP Prototype

### What is an MVP

![/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_19.12.32.png](/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_19.12.32.png)

### Type MVP Tests

- Marketing MVP tests: not testing the product functionality
- Product MVP tests: showing prospective customers functionality to solicit their feedback on it
- Quantitative
- Qualitative

> ⚠️ when you are first starting to develop your product or marketing materials, it is most beneficial to start with qualitative tests to gain some initial understanding

![/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_19.20.13.png](/images/bn-lean-product-playbook/Screen_Shot_2020-12-30_at_19.20.13.png)

### Wizard of Oz and Concierge MVPs

- The Wizard of Oz MVP and concierge MVP allow you to actually test your live product or service; but instead of the final version, you are using manual workarounds.
- Concierge MVPs work best with services, especially those with processes that require a fair amount of interaction with and input from the customer.
- Example: Airbnb hired professional photographer and upload the image manually before build an automated solution for it.

### Fake Door/404 Page

- The fake door or 404 page test is a good way to validate demand for a new feature that you are considering building.
- The idea is to include a link or button for the new feature and see what percentage of customers click on it.

## Chapter 8. Apply the Principles of Great UX Design


> 📌 An incredible UX can be a strong product differentiator.

One way to evaluate UX is to consider how much it helps or hinders the functionality in conveying the desired customer benefits.

A great UX also achieves a high degree of *usability* and *delight*.

### Usability

**Olsen’s Law of Usability**

- The more user effort required to take an action, the lower the percentage of users who will take that action.
- The less user effort required, the higher the percentage of users who will take that action.

### Delight

Beyond simply avoiding user frustration, means evoking positive emotions. Products that delight users are enjoyable and fun to use.

**Aspects of delightful:**

- Aesthetics
- Simplicity
- Read the user’s mind
- Convey personality to evoke emotion from users
- Surprise

### Conceptual Design

- Underlying concept that forms the essence of the user experience
- The essence of how they function to create value for the user
- Example: the checkbook in Quicken, map-centric design with nearby cars in Uber

### Information Architecture

- Determines how you structure your product’s information and functionality.
- Findability refers to how easy it is for users to find what they’re looking for in the product.

### Interaction Design

- Defines how the user and your product interact with one another.
- Flowcharts: specify the possible flows for key tasks in your user experience; help product team to understands the end-to-end user experience the product should deliver

### Visual Design

- Principles of Composition
- Gestalt Principles

### Design Copy

The quality of the copy on marketing pages can result in major differences in your conversion rate.

## Chapter 9. Test your MVP with Customers

When you are early in defining and validating your MVP, moderated testing is the way to go to ensure you can ask questions and get rich customer feedback.

When you are farther down the road and feeling more confident about your MVP, unmoderated testing can be a useful tool to compliment moderated testing since it takes less time and is less expensive.

### How to Avoid the Scheduling Trap

The team has probably received a lot of pressure to move forward and succumbed, proceeding with high fidelity design or even coding. By the time they’re able to digest the feedback from the wave of user tests, it’s too late for it to impact the product. **The best way out of this trap is to just blindly schedule users on a routine basis.**

### Ramen User Testing

Eliminates everything but the essential parts of user testing

### Usability vs. Product-Market Fit

Feedback on usability has to do with how **easy** it is for customers to understand and use your product, whereas feedback on product-market fit has to do with how **valuable** they find your product.

Usability issues can prevent you from assessing product-market fit and how great usability does not mean you have strong product-market fit.

## Chapter 10. Iterate and Pivot to Improve Product-Market Fit

### The Build Measure Learn Loop

**Build** doesn’t mean that you have to actually build a product. It means having something that you can test with customers, which could be a live product or design artifacts

### The Hypothesize-Design-Test-Learn Loop

Test and improve your problem space thinking by showing customers a product or design artifact in the solution space and soliciting their feedback on it.

![/images/bn-lean-product-playbook/Screen_Shot_2021-01-02_at_14.26.19.png](/images/bn-lean-product-playbook/Screen_Shot_2021-01-02_at_14.26.19.png)

## Chapter 12. Build Your Product Using Agile Development

### Cone of uncertainty

The estimation error early in a project is larger than the estimation error near the end of a project.

[Cone of Uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty)

### Agile in Development

When developers go through the thinking and investigation required to break a large task into smaller ones, they reduce the unknown unknowns by converting them into known unknowns.

In Agile, you should design before you code; you’re just doing so in much smaller increments.

### Succeeding with Agile

- **Cross-Functional Collaboration**: It’s essential to avoid creating silos where each function throws their work product “over the wall” to the next function in the workflow.
- **Ruthless Prioritization**
- **Adequately Define Your Product for Developers**: provide enough definition that developers can start building with confidence that you didn’t fail to think through an important aspect.
- **Stay Ahead of Developers:** It doesn’t work well if the designer is creating wireframes for a user story at the same time that the developer is trying to code it.
- **Break Stories Down:** Smaller scope stories and tasks result in smaller estimation errors.

### Quality Assurance

**Validation testing:** check if new feature or improved functionality works as expected.

**Regression testing:** none of the other existing functionality was inadvertently broken during the process of building the new or improved functionality

## **Chapter 13. Measure Your Key Metrics**

[When to Use Which User-Experience Research Methods](https://www.nngroup.com/articles/which-ux-research-methods/)

![/images/bn-lean-product-playbook/Screen_Shot_2021-01-02_at_17.00.22.png](/images/bn-lean-product-playbook/Screen_Shot_2021-01-02_at_17.00.22.png)

### Analytics Framework

### AARRR

[AARRR Framework- Metrics That Let Your StartUp Sound Like A Pirate Ship](https://medium.com/@ms.mbalke/aarrr-framework-metrics-that-let-your-startup-sound-like-a-pirate-ship-e91d4082994b)

![/images/bn-lean-product-playbook/Screen_Shot_2021-01-02_at_17.17.13.png](/images/bn-lean-product-playbook/Screen_Shot_2021-01-02_at_17.17.13.png)

### Identify the Metric that Matters Most

1. **Optimize Retention First**: until you know that customers find your product valuable, it doesn't make sense to spend lots of resources trying to acquire customers.
2. **Optimize Conversion before Acquisition**
3. Optimizing Acquisition

### Retention Rate

The retention rate is the ultimate metric of product-market fit.

**How to read retention curve**

- Initial drop-off rate
- Rate of descent
- Terminal value: most important parameters, it answers the question, “What percentage of customers who tried your product continue to use it in the long run?”

## Chapter 14. Use Analytics to Optimize Your Product and Business

### Lean Product Analytics Process

![/images/bn-lean-product-playbook/Screen_Shot_2021-01-02_at_18.23.32.png](/images/bn-lean-product-playbook/Screen_Shot_2021-01-02_at_18.23.32.png)

## 10 best practices for creating successful products

1. Have a point of view but stay open-minded.
2. Articulate your hypotheses.
3. Prioritize ruthlessly.
4. Keep your scope small but focused.
5. Talk to customers.
6. Test before you build.
7. Avoid a local maximum.
8. Try out promising tools and techniques.
9. Ensure your team has the right skills.
10. Cultivate your team’s collaboration.