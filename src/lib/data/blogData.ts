export interface BlogPostItem {
  id: string
  title: string
  slug: string
  description: string
  date: string
  readTime: string
  category: string
  tags: string[]
  content: string
}

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 'dsa-contest-strategy',
    title: 'Mastering Competitive Programming: Lessons from 700+ DSA Problems',
    slug: 'dsa-contest-strategy',
    description: 'How I achieved Global Rank 996 on LeetCode Bi-Weekly Contest 163 and cleared the Flipkart Grid 6.0 Technical Round.',
    date: '2026-05-10',
    readTime: '6 min read',
    category: 'Competitive Programming',
    tags: ['C++', 'DSA', 'LeetCode', 'Algorithms', 'Contest Strategy'],
    content: `
### Introduction

Consistency in Data Structures & Algorithms is the bedrock of strong software engineering skills. Over the past 3-4 years at IIITDM Kurnool, I solved **700+ DSA problems** across LeetCode, GeeksforGeeks, and Codeforces.

In this post, I break down the exact patterns, time management strategies, and practice routines that helped me rank **996 globally** in LeetCode Bi-Weekly Contest 163 and clear Flipkart Grid 6.0.

---

### Core Patterns to Master

#### 1. Graph Algorithms & Shortest Path
Understanding Breadth-First Search (BFS), Depth-First Search (DFS), Dijkstra's Algorithm, and Disjoint Set Union (DSU) is crucial for complex network & grid problems.

#### 2. Dynamic Programming (DP)
Mastering state transitions:
- Knapsack variants (0/1, Unbounded)
- Longest Common Subsequence (LCS) & String DP
- DP on Trees and Bitmask DP

\`\`\`cpp
// Standard 0/1 Knapsack DP Pattern in C++
int knapsack(int W, vector<int>& wt, vector<int>& val, int n) {
    vector<int> dp(W + 1, 0);
    for (int i = 0; i < n; i++) {
        for (int w = W; w >= wt[i]; w--) {
            dp[w] = max(dp[w], val[i] + dp[w - wt[i]]);
        }
    }
    return dp[W];
}
\`\`\`

---

### Key Takeaways for Speed under Contest Pressure
- **Read All Constraints First**: $N \le 10^5$ usually means $O(N)$ or $O(N \log N)$ approach.
- **Modularity in C++**: Keep clean template headers with fast I/O (\`cin.tie(NULL)\`).
    `
  },
  {
    id: 'building-ai-travel-apps',
    title: 'Building AI-Powered Apps with Gemini & Groq APIs',
    slug: 'building-ai-travel-apps',
    description: 'Architecting dynamic itinerary generation workflows with React Native, Node.js, and multi-provider LLM prompts.',
    date: '2025-11-20',
    readTime: '5 min read',
    category: 'AI & Full-Stack',
    tags: ['React Native', 'Gemini API', 'Groq API', 'Node.js', 'LLM'],
    content: `
### Integrating Multi-Provider LLMs in Mobile Apps

When building **Travento**, our goal was delivering instant travel itineraries tailored to user budget, destination, and days.

Relying on a single LLM API can introduce latency bottlenecks or rate limit failures. We combined **Groq API** for sub-second rapid JSON structure drafting and **Gemini API** for deep contextual travel recommendations.

---

### Strict JSON Prompt Formatting

To prevent mobile UI rendering crashes, prompt engineering must enforce validated JSON schemas:

\`\`\`json
{
  "destination": "Kyoto, Japan",
  "days": [
    {
      "day": 1,
      "activities": [
        { "title": "Fushimi Inari Shrine", "time": "09:00 AM", "cost": "Free" }
      ]
    }
  ]
}
\`\`\`
    `
  },
  {
    id: 'nextjs-rbac-news-portal',
    title: 'Implementing Role-Based Access Control (RBAC) in Next.js & Express',
    slug: 'nextjs-rbac-news-portal',
    description: 'Designing secure Admin, Reporter, and User workflows for KhabarPath online news portal.',
    date: '2026-02-15',
    readTime: '7 min read',
    category: 'Web Development',
    tags: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'RBAC'],
    content: `
### Newsroom Access Delegation

In **KhabarPath**, journalists draft articles while admins approve publishing and manage categories.

Implementing custom JWT middleware in Express ensures strict route protection:

\`\`\`javascript
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden: Insufficient privileges' });
    }
    next();
  };
};

// Usage on reporter route
app.post('/api/articles', verifyToken, authorizeRoles('Reporter', 'Admin'), createArticle);
\`\`\`
    `
  }
]
