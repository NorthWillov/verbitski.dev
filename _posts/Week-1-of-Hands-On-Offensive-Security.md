---
title: "From Theory to Practice: Week 1 of Hands-On Offensive Security"
excerpt: "Documenting a structured transition from fullstack development into IT security. Background: BSc IT Security, 2+ years MERN stack. Follow the series!"
coverImage: "/assets/blog/Week1/week1.jpg"
date: "2026-03-24T05:35:07.322Z"
author:
  name: Artem Verbitski
  picture: "/assets/blog/authors/artem.jpeg"
ogImage:
  url: "/assets/blog/Week1/week1.jpg"
---


# From Theory to Practice: Week 1 of Hands-On Offensive Security

I hold a bachelor's degree in IT Security and have spent two years building fullstack web applications with React and Node.js. The theoretical foundation is solid but security is a field where hands-on practice is non-negotiable. This series documents my structured transition into offensive security, real tools, real environments, real findings.

Week one focus: environment setup, reconnaissance tooling, and web application vulnerabilities.

---

## Environment: Kali Linux on Apple Silicon

Running security tooling on an M1 MacBook requires some deliberate setup. Native ARM support for many tools is still inconsistent, so I provisioned a Kali Linux VM using UTM a solid QEMU-based virtualisation option for Apple Silicon.

One issue worth documenting is that UTM can produce a black screen on initial Kali boot due to display driver initialisation. The fix involves adjusting the display settings before first launch. Not a blocker, but it costs time if you don't know to expect it.

With Kali running, I configured Burp Suite as an intercepting proxy with Firefox routing all traffic through it. This is the standard web application testing setup, traffic interception, modification, and analysis in one workflow.

---

## Reconnaissance: dirb vs gospider

Two tools, two philosophies for mapping a target's attack surface.

**`dirb`** performs dictionary-based brute-force enumeration, systematically requesting common paths to discover directories and files that aren't publicly linked. One practical note:

```bash
dirb http://www.example.com   # correct
dirb http://example.com       # may produce incomplete results
```

Virtual hosting means `www` and the bare domain can resolve differently on the server side. Always specify explicitly.

**`gospider`** takes a crawler-based approach following all discoverable links from the target and mapping the visible surface. Where `dirb` finds what's hidden, `gospider` maps what's exposed. In practice, both belong in a recon workflow.

---

## Penetration Testing Methodology

Effective penetration testing follows a structured engagement model:

1. **Information Gathering** — passive and active reconnaissance before any interaction with the target
2. **Enumeration/Scanning** — identifying live services, open ports, application fingerprints
3. **Exploitation** — leveraging identified vulnerabilities using public exploits or logic manipulation
4. **Privilege Escalation** — expanding access horizontally (lateral movement) or vertically (privilege gain)
5. **Post-Exploitation** — assessing further reachable systems, data exfiltration potential, and producing a findings report

All engagements are governed by a **Rules of Engagement** document the formal agreement defining scope, permitted techniques, and legal boundaries. No document, no test.

---

## Path Traversal: Developer Perspective

Path traversal is a well understood vulnerability with a high detection rate in the wild, precisely because developers with no security background don't think about it at implementation time.

The attack vector: applications that accept a filename or path as a URL parameter can be manipulated using `../` sequences to escape the intended directory.

```http
# Intended behaviour
GET /loadImage?filename=photo.png

# Path traversal attempt
GET /loadImage?filename=../../../etc/passwd
```

Common vulnerable parameters: `?file=`, `?path=`, `?page=`, `?template=`, `?doc=`, `?load=`

`/etc/passwd` is typically the first read target. It confirms exploitability and enumerates system users. From a developer's perspective, any route that accepts a user-controlled path without strict sanitisation and allowlisting is a potential vector.

---

## Burp Suite: Intercepting and Modifying Requests

The core insight Burp Suite makes visceral: HTTP requests are not immutable. Every parameter, header, and body value that leaves the browser can be intercepted and rewritten before reaching the server.

This is obvious in theory. Seeing it in practice — modifying a live request mid-flight and observing the server's response — makes the implications concrete in a way that reading about it does not.

---

## Week 1 Summary

| Area | Status |
|---|---|
| Kali Linux (UTM, Apple Silicon) | ✓ Configured |
| Burp Suite + Firefox proxy | ✓ Intercepting live traffic |
| Reconnaissance tooling (dirb, gospider) | ✓ Tested against own infrastructure |
| Pentesting methodology | ✓ |
| Path traversal | ✓ Understood, tested in lab |

Week 2: OWASP Top 10 in depth, XSS labs on PortSwigger Web Security Academy.

---

*Documenting a structured transition from fullstack development into IT security. Background: BSc IT Security, 2+ years MERN stack. Follow the series at [verbitski.dev](https://verbitski.dev).*